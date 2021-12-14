import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';

import { ApiService } from 'src/app/services/api.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-free-dictionary-page',
  templateUrl: './free-dictionary-page.component.html',
  styleUrls: ['./free-dictionary-page.component.scss']
})
export class FreeDictionaryPageComponent implements OnInit, OnDestroy {
  public searchControl = new FormControl('');

  public title: string = "Free Dictionary";
  public result: any  = [];

  public wordExample =[{"word":"dead","phonetic":"dɛd","phonetics":[{"text":"dɛd","audio":"//ssl.gstatic.com/dictionary/static/sounds/20200429/dead--_gb_1.mp3"}],"origin":"Old English dēad, of Germanic origin: related to Dutch dood and German tot, also to die1.","meanings":[{"partOfSpeech":"adjective","definitions":[{"definition":"no longer alive.","example":"a dead body","synonyms":["deceased","expired","departed","gone","no more","passed on","passed away","late","lost","lamented","perished","fallen","slain","slaughtered","killed","murdered","lifeless","not breathing","having breathed one's last","defunct","extinct","inanimate","insentient","insensate","inert","(as) dead as a doornail","six feet under","pushing up daisies","under the sod","with God","asleep","at peace","demised","exanimate"],"antonyms":["alive","living"]},{"definition":"(of a place or time) characterized by a lack of activity or excitement.","example":"Brussels isn't dead after dark, if you know where to look","synonyms":["uneventful","uninteresting","unexciting","uninspiring","dull","boring","flat","quiet","sleepy","slow","stale","humdrum","tame","pedestrian","lacklustre","lifeless","tedious","tiresome","wearisome","backward","backwoods","behind the times","one-horse","dead-and-alive","dullsville"],"antonyms":["lively"]},{"definition":"(of a piece of equipment) no longer functioning.","example":"the phone had gone dead","synonyms":["not working","out of order","out of commission","inoperative","inactive","ineffective","in (a state of) disrepair","broken","broken-down","malfunctioning","defective","kaput","conked out","on the blink","bust","busted","gone phut","finished","done for","dud","knackered","duff","buggered"],"antonyms":["in working order"]},{"definition":"no longer current, relevant, or important.","example":"pollution had become a dead issue","synonyms":[],"antonyms":[]},{"definition":"(of sound) without resonance; dull.","example":"the note sounds dead compared to all others on the keyboard","synonyms":[],"antonyms":[]},{"definition":"complete; absolute.","example":"we sat in dead silence","synonyms":["complete","absolute","total","entire","outright","utter","downright","out-and-out","thorough","unqualified","unmitigated"],"antonyms":["partial"]}]},{"partOfSpeech":"adverb","definitions":[{"definition":"absolutely; completely.","example":"you're dead right","synonyms":["completely","absolutely","totally","utterly","deadly","perfectly","entirely","wholly","fully","quite","thoroughly","unreservedly","definitely","certainly","positively","unconditionally","categorically","unquestionably","no doubt","undoubtedly","without a doubt","without question","surely","unequivocally","exactly","precisely","decisively","conclusively","manifestly","in every way","in every respect","one hundred per cent","every inch","to the hilt"],"antonyms":["partially"]}]}]}]

  private subsciptions: Subscription[] = [];
  constructor(
    public sidebar: SidebarService,
    private api: ApiService
    ) { }

  ngOnInit(): void {
    const sub = this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((e) => {
      if(e.trim().length > 0) {
        this.search(e);
      }
    });

    // this.result = this.wordExample;

  }

  search(word: string) {
      let sub = this.api.search(word).subscribe((e) => {
        this.result = e;
        sub.unsubscribe();
      }, err => {
        if(err.status === 404) {
          console.log('Nothing found')
        }
      })
  }

  instantSearch(word: string){
    this.search(word);
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  ngOnDestroy() {
    if(this.subsciptions.length > 0) {
      this.subsciptions.map((e:Subscription) => { e.unsubscribe() })
    }
  }
}
