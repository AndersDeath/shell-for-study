import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconService } from '../../services/icon/icon.service';

@Component({
  selector: 'sfs-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon: string = '';
  public result: SafeHtml = '';
  constructor(
    private iconService: IconService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.result = this.sanitizer.bypassSecurityTrustHtml(this.iconService.get(this.icon))
  }

}
