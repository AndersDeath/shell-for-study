import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-free-dictionary',
  templateUrl: './free-dictionary.component.html',
  styleUrls: ['./free-dictionary.component.scss']
})
export class FreeDictionaryComponent implements OnInit {
  public searchControl = new FormControl('');
  public result: any  = [];

  private subsciptions: Subscription[] = [];

  constructor(
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

  ngOnDestroy() {
    if(this.subsciptions.length > 0) {
      this.subsciptions.map((e:Subscription) => { e.unsubscribe() })
    }
  }

}
