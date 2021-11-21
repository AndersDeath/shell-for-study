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

  flashCardsData: any[] = [];
  flasCardsDataLength = 0;
  flashCardsCurrentNum = 0;
  currentFlashCard: Subject = {
    en: '',
    ru: '',
    subject: ''
  }

  swipeCoord: any;
  swipeTime: any;

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
    this.dictionary.sections.forEach((e) => {
      e.groups.forEach((g) => {
        g.subjects.forEach((s: any) => {
          this.flashCardsData.push(s);
        });
      });
    });
    this.flashCardsData.sort(() => Math.random() - 0.5);
    this.currentFlashCard = this.flashCardsData[this.flashCardsCurrentNum];
    this.flasCardsDataLength = this.flashCardsData.length;
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
  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();
    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;
      if (duration < 1000
        && Math.abs(direction[0]) > 30
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
        const swipe = direction[0] < 0 ? 'next' : 'previous';
        if (swipe === 'next') {
         this.nextFlashCard();
        } else if (swipe === 'previous') {
          this.previousFlashCard();
        }
      }
    }
  }

  nextFlashCard() {
    let n = this.flashCardsCurrentNum - 1;
    if(n < 0) {
      n =  this.flasCardsDataLength - 1;
    }
    this.flashCardsCurrentNum = n;
    this.currentFlashCard = this.flashCardsData[n];
  }

  previousFlashCard() {
    let n = this.flashCardsCurrentNum + 1;
    if(n > this.flasCardsDataLength - 1) {
      n =  0;
    }
    this.flashCardsCurrentNum = n;
    this.currentFlashCard = this.flashCardsData[n];
  }


  toggleSidebar() {
    this.sidebar.toggle();
  }
}
