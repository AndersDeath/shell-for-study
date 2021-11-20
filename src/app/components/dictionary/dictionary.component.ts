import { Component } from '@angular/core';
import { DictionaryMock, Dictionary, Subject, DictionaryBuilder } from '../../data-lib';
import { MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from '../settings/settings.component';

const TABLE_VIEW = 'TABLE_VIEW';

const CARDS_VIEW = 'CARDS_VIEW';
const FAKE_FLASHCARDS_VIEW = "FAKE_FLASHCARDS_VIEW";
@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent {
  viewType: string = TABLE_VIEW;
  displayedColumns: string[] = ['subject', 'ru', 'en'];
  storageName: string = 'viewType';
  viewsTypes = {
    cards: CARDS_VIEW,
    table: TABLE_VIEW,
    fakeFlash: FAKE_FLASHCARDS_VIEW
  }
  version = 'v0.0.10';
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
  public dictionary: Dictionary =  DictionaryBuilder(DictionaryMock);

  constructor(
    public dialog: MatDialog) {

  }


  setDictView(val: string) {
    this.viewType = val;
    localStorage.setItem(this.storageName, val)
  }



  ngOnInit() {
    const item = localStorage.getItem(this.storageName) || '';
    if ([CARDS_VIEW, TABLE_VIEW, FAKE_FLASHCARDS_VIEW].includes(item)) {
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

  openMore() {
    this.dialog.open(SettingsComponent);
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
}
