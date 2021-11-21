import {Component, Inject, OnInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Dictionary, DictionaryBuilder } from 'src/app/data/data-lib';
import { TranslationsData } from 'src/app/data/translations-data';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['./settings.component.scss']

})
export class SettingsComponent implements OnInit {
  fileReader = new FileReader();
  public dictionary: Dictionary = new Dictionary();

  fileUrl: SafeResourceUrl = '';
  fileName: string = 'collection.dict';
  constructor(
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
  }

  ngOnInit() {
    this.dictionary = this.data.dictionary;
  }

  collectionInputChange(fileInputEvent: any) {
    const file: File = fileInputEvent.target.files[0]
    this.fileReader.onload = () => {
      const result = this.fileReader.result;
      if (result) {
        this.dictionary = JSON.parse(result.toString());
      }
    }
    this.fileReader.readAsText(file);
  }

  downloadCollection() {
    const data = this.dictionary;
    const blob = new Blob([JSON.stringify(data).replace(/(\r\n|\n|\r)/g, "")], { type: 'application/octet-stream' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

}
