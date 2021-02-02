import { Component, Input, OnInit } from '@angular/core';
import { School } from '../interfaces/school';

@Component({
  selector: 'app-school-card',
  templateUrl: './school-card.component.html',
  styleUrls: ['./school-card.component.scss' ],
})
export class SchoolCardComponent implements OnInit {
  constructor() {}

  @Input() school: School | undefined;

  ngOnInit(): void {}
}
