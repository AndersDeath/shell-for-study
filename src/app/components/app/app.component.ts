import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { createSFSMenuData, SFSMenuItem } from 'src/app/data/data-lib';
import { UtilsService } from 'src/app/services/utils.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { EN } from 'src/app/i18n/i18n.model';
import { I18nService } from 'src/app/services/i18n.service';

const version = 'v0.9.39';

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
    private i18n: I18nService,
    private utils: UtilsService
    ) {}


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
    this.i18n.set(EN);
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  watchClose() {
    this.sidebar.close();
  }
}
