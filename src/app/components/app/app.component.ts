import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { TranslateService } from '@ngx-translate/core';
import { createSFSMenuData, SFSMenuItem } from 'src/app/data/data-lib';
import { UtilsService } from 'src/app/services/utils.service';
import { SidebarService } from 'src/app/services/sidebar.service';

interface TranslateModel {
  download: string;
}

const EN = 'en';
const RU = 'ru';

const version = 'v0.9.21';

const EN_TRANSLATION: TranslateModel = {
  download: 'Download'
}

const RU_TRANSLATION: TranslateModel = {
  download: 'Скачать'
}

enum ContextLinks {
  SearchGoogle = 'https://www.google.com/search?q=',
  SearchYandex = 'https://yandex.ru/search/?text=',
  DictionaryOxforn = 'https://www.oxfordlearnersdictionaries.com/definition/english/',
  TranslateGoogle = 'https://translate.google.com/?sl=en&tl=ru&text='
}

function sfsIntroduction(version: string) {
  console.log('----------------------');
  console.log('Shell for study (SFS) ' + version);
  console.log('----------------------');
}

@Component({
  selector: 'sfs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isOpened = false;
  public version = version;
  public showContextMenu = false;
  @ViewChild(MatMenuTrigger)
  public trigger!: MatMenuTrigger;

  public menuData: SFSMenuItem[] = createSFSMenuData();
  public menuX = 0;
  public menuY = 0;
  constructor(
    public sidebar: SidebarService,
    private translate: TranslateService,
    private utils: UtilsService
    ) {

  }


  onRightClick(event: any) {
    event.preventDefault();
    this.showContextMenu = true;
      this.menuX = event.clientX;
      this.menuY = event.clientY;
      this.trigger.menuData = {item: this.utils.getSelectionText()}
      this.trigger.openMenu();
   }

   searchInGoogle() {
     window.open(ContextLinks.SearchGoogle + this.utils.getSelectionText(),  '_blank')
   }

   searchInYandex() {
    window.open(ContextLinks.SearchYandex + this.utils.getSelectionText(),  '_blank')
  }

   searchInOxford() {
    window.open(ContextLinks.DictionaryOxforn + this.utils.getSelectionText(),  '_blank')
  }

  translateToRussian() {
    window.open(ContextLinks.TranslateGoogle + this.utils.getSelectionText(),  '_blank')
  }

  ngOnInit() {
    this.isOpened = this.sidebar.opened;
    sfsIntroduction(this.version);
    this.translate.setTranslation(EN, EN_TRANSLATION);
    this.translate.setTranslation(RU, RU_TRANSLATION);
    this.translate.setDefaultLang(EN);
    this.translate.use(EN);
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  watchClose() {
    this.sidebar.close();
  }
}
