import { Component, Input, OnInit } from '@angular/core';
import { SubjectGroup } from 'src/app/data/data-lib';

@Component({
  selector: 'sfs-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  @Input() group: SubjectGroup = new SubjectGroup();

  displayedColumns: string[] = ['subject', 'ru', 'en'];

  constructor() { }

  ngOnInit(): void {
  }

}
