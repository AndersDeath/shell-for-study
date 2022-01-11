import { Component, Input, OnInit } from '@angular/core';
import { SubjectGroup } from 'src/app/data/data-lib';

@Component({
  selector: 'sfs-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})
export class CardsViewComponent implements OnInit {
  @Input() group: SubjectGroup = new SubjectGroup();

  constructor() { }

  ngOnInit(): void {
  }

}
