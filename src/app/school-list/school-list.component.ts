import { Component, Input, OnInit } from '@angular/core';
import { School } from '../interfaces/school';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: [
    '../universities/universities.component.scss',
    '../university-filter/university-filter.component.scss',
  ],
})
export class SchoolListComponent implements OnInit {
  constructor(public schoolService: SchoolService) {}

  Schools: School[] = [];
  search: string = '';

  ngOnInit(): void {
    this.schoolService
      .getAllSchools()
      .subscribe((schools) => (this.Schools = schools as School[]));
  }
}
