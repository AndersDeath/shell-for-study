import { Component, Input, OnInit } from '@angular/core';
import { SubjectGroup } from 'sfs-data-model';

@Component({
  selector: 'sfs-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  @Input() group: SubjectGroup = new SubjectGroup();

  constructor() { }

  ngOnInit(): void {
  }

}
