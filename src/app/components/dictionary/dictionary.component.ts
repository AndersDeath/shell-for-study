import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  fileUrl:SafeResourceUrl = '';
  fileName: string = 'collection.dict';
  fileReader = new FileReader();

  public dictionary: Dictionary = DictionaryMock;

  constructor(private sanitizer: DomSanitizer) {

  }
  collectionInputChange(fileInputEvent: any) {
    const file: File = fileInputEvent.target.files[0]
    this.fileReader.onload = () => {
      const result = this.fileReader.result;
      if(result) {
        this.dictionary = JSON.parse(result.toString());
      }
    }
    this.fileReader.readAsText(file);

  }

  isTableViewHandler(val: string) {
    this.viewType = val;
    localStorage.setItem(this.storageName, val)
  }

  downloadCollection() {
    const data = this.dictionary;
    const blob = new Blob([JSON.stringify(data).replace(/(\r\n|\n|\r)/g,"")], { type: 'application/octet-stream' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

  ngOnInit() {
    const item = localStorage.getItem(this.storageName) || '';
    if([CARDS_VIEW, TABLE_VIEW].includes(item)) {
      this.viewType = item;
    }

  }
}
