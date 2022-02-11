import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HistoryService } from '../../services/history.service';
import { Subscription } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'sfs-spanish-dictionary',
  templateUrl: './spanish-dictionary.component.html',
  styleUrls: ['./spanish-dictionary.component.scss']
})
export class SpanishDictionaryComponent implements OnInit {

  public viewObj: any = [];
  public searchValue: any;
  private spanishAudioUrl = `https://media.merriam-webster.com/audio/prons/es/me/mp3/`;
  private subs:Subscription[] = [];

  constructor(public data: DataService, public history: HistoryService) {}

  ngOnInit() {

    this.data.vocabularyComEnglishDefenitionGet('death').subscribe((e) => {
      // console.log('voc', e);
    });

    const sub = this.history.search.subscribe((e) => {
      this.searchValue = e;
      this.getData();
    });
    this.subs.push(sub);
  }

  parseResponce(resp: any) {
    const arr: any = [];
    resp.forEach((data: any) => {
      if (data.meta.lang === 'es') {
        arr.push({
          lang: data.meta.lang,
          word: data.hwi.hw,
          soundUrls: this.getSoundUrls(data, data.meta.lang),
          def: { variants: this.getDefenitions(data) },
          shortDef: data.shortdef,
          fl: data.fl,
        });
      }
    });

    return arr;
  }

  getSoundUrls(data: any, lang: any) {
    const res: any = [];
    if (lang === 'es') {
      if (data.hwi.prs === undefined) {return res; }
      data.hwi.prs.forEach((e: any) => {
        res.push(this.spanishAudioUrl + e.sound.audio[0] + '/' + e.sound.audio + '.mp3');
      });
    }
    return res;
  }

  getDefenitions(data: any) {
    const res: any = {translated: [], simple: []};
    data.def.forEach((level1: any) => {
      for (const level2 of level1.sseq) {
        level2.forEach((level3: any) => {
          if (level3[0] === 'sense') {
            const q: any = this.parceSense(level3[1]);
            if (q.translated.length > 0 || q.simple.length > 0) {
              if (q.simple.length > 0) {

                res.simple.push(q.simple);
              }
              if (q.translated.length > 0) {

                res.translated.push(q.translated);
              }
            }
          } else {
            // console.log('ы');
          }
        });
      }
    });
    return res;
  }

  parceSense(data: any) {
    const res: any = {
      translated: [],
      simple: []
    };
    Object.keys(data).forEach((key) => {
      switch (key) {
        case 'vrs':
          res.simple.push(this.vrsParse(data[key]));
          break;
        case 'dt':
          const q = this.dtParse(data[key]);
          if (q.length > 0) {
            for (const i of q) {
              res.translated.push(i);
            }
          }
          break;
        case 'sn':
          break;
        default:
          break;
      }
    });
    return res;
  }

  vrsParse(data: any) {
    const res: any = [];
    data.forEach((element: any) => {
      res.push(element.va);
    });
    return res;
  }
  dtParse(data: any) {
    const res: any = [];
    data.forEach((element: any) => {
      if (element[0] === 'vis') {
        element[1].forEach((el: any) => {
          res.push(el);
        });
      }
    });
    return res;
  }

  search() {
    this.history.set(this.searchValue);
    this.getData();
  }

  getData() {
    this.data.dictionaryApiComSpanishGet(this.searchValue).pipe(take(1), map((res) => this.parseResponce(res))).subscribe((e: any[]) => {
      this.viewObj = [];
      this.viewObj = e;
      this.searchValue = '';
    });

  }

  public ngOnDestroy() {
    if (this.subs.length > 0) {
      this.subs.forEach(sub => {
        sub.unsubscribe();
      });
    }
  }

}
