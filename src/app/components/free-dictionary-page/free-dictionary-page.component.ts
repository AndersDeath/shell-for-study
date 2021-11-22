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
      this.search(e);
    })

  }

  search(word: string) {
      let sub = this.api.search(word).subscribe((e) => {
        console.log(e);
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
