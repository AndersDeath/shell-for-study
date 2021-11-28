import { Component, Input } from '@angular/core';
import { Dictionary, Subject } from '../../data/data-lib';
import { MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from '../settings/settings.component';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ARTICLE_VIEW, CARDS_VIEW, FAKE_FLASHCARDS_VIEW, TABLE_VIEW } from 'src/app/constants';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent {
  @Input() dictionary: Dictionary = new Dictionary();
  @Input() title: string = '';
  @Input() viewTypes: string[] = [];

  viewType: string = '';
  displayedColumns: string[] = ['subject', 'ru', 'en'];

  storageName: string = '';

  CARDS_VIEW = CARDS_VIEW;
  FAKE_FLASHCARDS_VIEW = FAKE_FLASHCARDS_VIEW;
  TABLE_VIEW = TABLE_VIEW;
  ARTICLE_VIEW = ARTICLE_VIEW;

  constructor(
    public dialog: MatDialog,
    public sidebar: SidebarService,
    ) {

  }

  setDictView(val: string) {
    this.viewType = val;
    localStorage.setItem(this.storageName, val)
  }

  ngOnInit() {
    this.storageName = this.dictionary.title + 'Storage'
    const item = localStorage.getItem(this.storageName) || '';
    if(item === '') {
      this.viewType = this.viewTypes[0] || '';
    }
    if (this.viewTypes.includes(item)) {
      this.viewType = item;
    }
  }

  isViewEnable(view: string) {
    return this.viewTypes.includes(view);
  }

  openMore() {
    this.dialog.open(SettingsComponent,{
      data: {
        dictionary: this.dictionary
      }
    });
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }
}
