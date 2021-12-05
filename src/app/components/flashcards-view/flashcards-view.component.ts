import { Component, Input, OnInit } from '@angular/core';
import { Dictionary, Subject } from 'src/app/data/data-lib';

@Component({
  selector: 'app-flashcards-view',
  templateUrl: './flashcards-view.component.html',
  styleUrls: ['./flashcards-view.component.scss']
})
export class FlashcardsViewComponent implements OnInit {

  @Input() dictionary: Dictionary = new Dictionary();
  swipeCoord: any;
  swipeTime: any;
  flashCardsData: any[] = [];
  flasCardsDataLength = 0;
  flashCardsCurrentNum = 0;
  currentFlashCard: Subject = {
    en: '',
    ru: '',
    subject: ''
  }
  isOpen = false;

  constructor() { }

  ngOnInit(): void {
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

  toggle() {
    this.isOpen = !this.isOpen;
  }


  nextFlashCard() {
    let n = this.flashCardsCurrentNum - 1;
    if(n < 0) {
      n =  this.flasCardsDataLength - 1;
    }
    this.flashCardsCurrentNum = n;
    this.currentFlashCard = this.flashCardsData[n];
    this.isOpen = false;
  }

  previousFlashCard() {
    let n = this.flashCardsCurrentNum + 1;
    if(n > this.flasCardsDataLength - 1) {
      n =  0;
    }
    this.flashCardsCurrentNum = n;
    this.currentFlashCard = this.flashCardsData[n];
    this.isOpen = false;
  }


}
