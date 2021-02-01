import { Component, OnInit } from '@angular/core';
import { Filter } from '../interfaces/filter';
import { Page } from '../interfaces/page';
import { University } from '../interfaces/university';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent implements OnInit {

  constructor(
    private universityService: UniversityService) { }

  filter: Filter = {};

  pageSettings: any = {
    page: 1,
    pageSize: 2
  };

  page: Page<University> | undefined;  

  totalSize = 0;

  ngOnInit(): void {    
    this.getUniversityPage();
  }

  getUniversityPage(): void {
    this.universityService.getUniversityPage(this.pageSettings, this.filter)
      .subscribe(page => {
        this.page = page;
        if (this.page)
          this.totalSize = this.page.totalPages * this.page.pageSize;
      });
  }
}
