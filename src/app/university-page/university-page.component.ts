import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { University } from '../interfaces/university';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-university-page',
  templateUrl: './university-page.component.html',
  styleUrls: ['./university-page.component.scss']
})
export class UniversityPageComponent implements OnInit {

  constructor(
    private universityService: UniversityService,
    private route: ActivatedRoute) { }

  university: University | undefined;

  ngOnInit(): void {
    this.getUniversity();
  }

  getUniversity() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id)
      this.universityService.getUniversity(id)
        .subscribe(u => this.university = u);
  }

}
