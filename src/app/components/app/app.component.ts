import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { TranslateService } from '@ngx-translate/core';
import { createSFSMenuData, SFSMenuItem } from 'src/app/data/data-lib';
import { UtilsService } from 'src/app/services/utils.service';
import { SidebarService } from 'src/app/services/sidebar.service';

enum ContextLinks {
  SearchGoogle = 'https://www.google.com/search?q=',
  SearchYandex = 'https://yandex.ru/search/?text=',
  DictionaryOxforn = 'https://www.oxfordlearnersdictionaries.com/definition/english/',
  TranslateGoogle = 'https://translate.google.com/?sl=en&tl=ru&text='
}

@Component({
  selector: 'sfs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isOpened = false;
  public version = 'v0.9.8';
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
    console.log('----------------------');
    console.log('Shell for study (SFS) ' + this.version);
    console.log('----------------------');
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  watchClose() {
    this.sidebar.close();
  }
}
