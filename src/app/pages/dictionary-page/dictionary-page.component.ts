import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DictionaryApiService } from '../../services/dictionary-api/dictionary-api.service';

@Component({
  selector: 'sfs-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss'],
})
export class DictionaryPageComponent implements OnInit, OnDestroy {
  private data: any;
  private subscriptions: Subscription[] = [];
  public currentData: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dictionaryApiService: DictionaryApiService
  ) { }

  ngOnInit(): void {
  const sub2 = this.dictionaryApiService.subject.subscribe((e) => {
      this.data = e;
      const sub = this.activatedRoute.params.subscribe((params) => {
        this.currentData = undefined;
        this.currentData = this.data.find((e: any) => {
          return e.dictionaryId === params.dictionaryId;
        });
        if (!this.currentData) {
          this.router.navigate(['/']);
        }
      });
      this.subscriptions.push(sub);
    });
    this.subscriptions.push(sub2);
  }

  ngOnDestroy(): void {
    if(this.subscriptions) {
      this.subscriptions.forEach((e: Subscription) => e.unsubscribe());
    }
  }
}
