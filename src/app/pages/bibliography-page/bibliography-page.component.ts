import { Subscription } from 'rxjs';
import { selectBibliography } from './../../state/data.selectors';
import { getBibliography } from './../../state/data.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'sfs-bibliography-page',
  templateUrl: './bibliography-page.component.html',
  styleUrls: ['./bibliography-page.component.scss']
})
export class BibliographyPageComponent implements OnInit {
  private subscriptions: Subscription[] = []
  public title: string = "Bibliography";
  public linksList: {
    url: string;
    header: string;
    title: string;
    description: string;
  }[] = []

  constructor(
    public sidebar: SidebarService,
    private store: Store,
    ) { }

  ngOnInit(): void {
    this.store.dispatch(getBibliography());
    const sub = this.store.select(selectBibliography).subscribe((e) => {
      this.linksList = [...e];
    });
    this.subscriptions.push(sub);
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  ngOnDestroy() {
    for (let index = 0; index < this.subscriptions.length; index++) {
      this.subscriptions[index].unsubscribe();
    }
  }
}
