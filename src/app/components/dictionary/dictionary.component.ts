import { Component } from '@angular/core';
import { DictionaryMock, Dictionary } from '../../data-lib';

const TABLE_VIEW = 'TABLE_VIEW';

const CARDS_VIEW = 'CARDS_VIEW';

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
    table: TABLE_VIEW
  }
  version = 'v0.0.1';

  public dictionary: Dictionary = DictionaryMock;

  isTableViewHandler(val: string) {
    this.viewType = val;
    localStorage.setItem(this.storageName, val)
  }

  ngOnInit() {
    const item = localStorage.getItem(this.storageName) || '';
    if([CARDS_VIEW, TABLE_VIEW].includes(item)) {
      this.viewType = item;
    }
  }
}
