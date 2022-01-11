import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { SidebarService } from 'src/app/services/sidebar.service';

interface SFSMenuItem {
  path: string;
  name: string;
}

function getSelectionText() {
  let text = "";
  if ((window as any).getSelection) {
      text = (window as any).getSelection().toString();

  }
  return text;
}

@Component({
  selector: 'sfs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isOpened = false;
  version = 'v0.6.3';
  showContextMenu = false;
  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;

  public menuData:SFSMenuItem[] = [
    {
      path: '/',
      name: 'English dictionary'
    },
    {
      path: '/transition-words',
      name: 'Transition words'
    },
    {
      path: '/glossary',
      name: 'Glossary of terms'
    },
    {
      path: '/js-interview-questions',
      name: 'JS interview questions'
    },
    {
      path: '/free-dictionary',
      name: 'Free Dictionary'
    }

  ]

  menuX = 0;
  menuY = 0;
  constructor(
    public sidebar: SidebarService
    ) {

  }


  onRightClick(event: any) {
    event.preventDefault();
    this.showContextMenu = true;
      this.menuX = event.clientX;
      this.menuY = event.clientY;
      this.trigger.menuData = {item: getSelectionText()}
      this.trigger.openMenu();
   }

   searchInGoogle() {
     window.open('https://www.google.com/search?q=' + getSelectionText(),  '_blank')
   }

   searchInOxford() {
    window.open('https://www.oxfordlearnersdictionaries.com/definition/english/' + getSelectionText(),  '_blank')
  }

  translateToRussian() {
    window.open('https://translate.google.com/?sl=en&tl=ru&text=' + getSelectionText(),  '_blank')
  }

  ngOnInit() {
    this.isOpened = this.sidebar.opened;
    console.log('----------------------');
    console.log('Shell for study (SFS) ' + this.version);
    console.log('----------------------');
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

  watchClose() {
    this.sidebar.close();
  }
}
