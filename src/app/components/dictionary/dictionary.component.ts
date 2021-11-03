import { Component } from '@angular/core';
import { DictionaryMock, Dictionary } from '../../data-lib';



@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent {
  isTableView = true;
  displayedColumns: string[] = ['subject', 'ru', 'en'];
  public dictionary: Dictionary = DictionaryMock;

  isTableViewHandler(isTable: boolean) {
    this.isTableView = isTable;
  }
}
