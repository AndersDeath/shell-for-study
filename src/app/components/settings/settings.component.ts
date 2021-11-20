import {Component} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Dictionary, DictionaryBuilder, DictionaryMock } from 'src/app/data-lib';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['./settings.component.scss']

})
export class SettingsComponent {
  fileReader = new FileReader();
  public dictionary: Dictionary =  DictionaryBuilder(DictionaryMock);

  fileUrl: SafeResourceUrl = '';
  fileName: string = 'collection.dict';
  constructor(
    private sanitizer: DomSanitizer,
    ) {
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
