import { Component, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from '../../components/settings/settings.component';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { Dictionary, ARTICLE_VIEW, CARDS_VIEW, FAKE_FLASHCARDS_VIEW, TABLE_VIEW, SPELLING_TEST_VIEW, FLASHCARDS_VIEW } from 'sfs-data-model';

@Component({
  selector: 'sfs-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnChanges{
  @Input() dictionary: Dictionary = new Dictionary();
  @Input() title: string = '';
  @Input() viewTypes: string[] = [];

  viewType: string = '';
  displayedColumns: string[] = ['subject', 'ru', 'en', 'es'];

  storageName: string = '';

  CARDS_VIEW = CARDS_VIEW;
  FAKE_FLASHCARDS_VIEW = FAKE_FLASHCARDS_VIEW;
  TABLE_VIEW = TABLE_VIEW;
  ARTICLE_VIEW = ARTICLE_VIEW;
  SPELLING_TEST_VIEW = SPELLING_TEST_VIEW;
  FLASHCARDS_VIEW = FLASHCARDS_VIEW;

  constructor(
    public dialog: MatDialog,
    public sidebar: SidebarService,
    ) {

  }

  setDictView(val: string) {
    this.viewType = val;
    localStorage.setItem(this.storageName, val)
  }


  ngOnChanges() {
    this.storageName = this.dictionary.title + 'Storage'
    const item = localStorage.getItem(this.storageName) || '';
    if(item === '') {
      this.viewType = this.viewTypes[0] || '';
    }
    if (this.viewTypes.includes(item)) {
      this.viewType = item;
    } else {
      this.viewType = this.viewTypes[0] || '';
    }
    let count = 0;
    this.dictionary.sections.forEach(section => {
      section.groups.forEach((group) => {
        count = count + group.subjects.length;
      });
    });

    console.log('Dictionary name: ', this.dictionary.title);
    console.log('Dictionary version: ', this.dictionary.version);
    console.log('Subjects count: ', count);
    console.log('----------------------');
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
