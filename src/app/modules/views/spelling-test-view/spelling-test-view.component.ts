import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { Dictionary, Subject } from 'src/app/data/data-lib';
import { ApiService } from 'src/app/services/api.service';

interface ISpellingTestSubject extends Subject {
  audio: string;
}

@Component({
  selector: 'sfs-spelling-test-view',
  templateUrl: './spelling-test-view.component.html',
  styleUrls: ['./spelling-test-view.component.scss']
})
export class SpellingTestViewComponent implements OnInit {

  @Input() dictionary: Dictionary = new Dictionary();

  public answerControl = new FormControl();
  swipeCoord: any;
  swipeTime: any;
  flashCardsData: any[] = [];
  flasCardsDataLength = 0;
  flashCardsCurrentNum = 0;
  SPINNER = SPINNER;
  currentFlashCard: ISpellingTestSubject = {
    en: '',
    ru: '',
    subject: '',
    audio: ''
  }

  isAnswered = false;

  constructor(
    private api: ApiService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.dictionary.sections.forEach((e) => {
      e.groups.forEach((g) => {
        g.subjects.forEach((s: Subject) => {
          let i = s.en || '';
          if(i.trim().split(' ').length !== 1) {
            this.flashCardsData.push(s);
          }
        });
      });
    });
    this.flashCardsData.sort(() => Math.random() - 0.5);
    this.currentFlashCard.audio = '';
    this.currentFlashCard = this.flashCardsData[this.flashCardsCurrentNum];
    this.searchAudio(this.currentFlashCard.subject);
    this.flasCardsDataLength = this.flashCardsData.length;
  }

  searchAudio(word: string) {
    this.ngxService.startLoader("loader-01");
    let sub = this.api.search(word).subscribe((e:any) => {
      if(e[0].phonetics[0] && e[0].phonetics[0].audio !== undefined) {
        this.currentFlashCard.audio = e[0].phonetics[0].audio;
        this.ngxService.stopLoader("loader-01");
      } else {
        this.nextFlashCard();
        this.ngxService.stopLoader("loader-01");
        sub.unsubscribe();
      }
      sub.unsubscribe();
    }, err => {
      if(err.status === 404) {
        this.ngxService.stopLoader("loader-01");
        this.nextFlashCard();
      }
    })
  }

  checkAnswer() {
    this.isAnswered = true;

  }


  nextFlashCard() {
    let n = this.flashCardsCurrentNum - 1;
    if(n < 0) {
      n =  this.flasCardsDataLength - 1;
    }
    this.flashCardsCurrentNum = n;
    this.currentFlashCard.audio = '';
    this.answerControl.setValue('');
    this.isAnswered = false;
    this.currentFlashCard = this.flashCardsData[n];
    this.searchAudio(this.currentFlashCard.subject);
  }

  previousFlashCard() {
    let n = this.flashCardsCurrentNum + 1;
    if(n > this.flasCardsDataLength - 1) {
      n =  0;
    }
    this.flashCardsCurrentNum = n;
    this.currentFlashCard.audio = '';
    this.answerControl.setValue('');
    this.isAnswered = false;

    this.currentFlashCard = this.flashCardsData[n];
    this.currentFlashCard = this.flashCardsData[n];

  }

}
