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
  public result: any;

  public wordExample = [{"word":"hello","phonetic":"həˈləʊ","phonetics":[{"text":"həˈləʊ","audio":"//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"},{"text":"hɛˈləʊ"}],"origin":"early 19th century: variant of earlier hollo ; related to holla.","meanings":[{"partOfSpeech":"exclamation","definitions":[{"definition":"used as a greeting or to begin a phone conversation.","example":"hello there, Katie!","synonyms":[],"antonyms":[]}]},{"partOfSpeech":"noun","definitions":[{"definition":"an utterance of ‘hello’; a greeting.","example":"she was getting polite nods and hellos from people","synonyms":[],"antonyms":[]}]},{"partOfSpeech":"verb","definitions":[{"definition":"say or shout ‘hello’.","example":"I pressed the phone button and helloed","synonyms":[],"antonyms":[]}]}]}];

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
      })

    console.log(this.wordExample)

  }

  search(word: string) {
      let sub = this.api.search(word).subscribe((e) => {
        console.log(JSON.stringify(e));
        console.log(e)
        this.result = e;
        sub.unsubscribe();
      }, err => {
        if(err.status === 404) {
          console.log('Nothing found')
        }
      })
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
