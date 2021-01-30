import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { University } from '../interfaces/university';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-university-card',
  templateUrl: './university-card.component.html',
  styleUrls: ['./university-card.component.scss']
})
export class UniversityCardComponent implements OnInit {

  constructor(
    private universityService: UniversityService,
    private route: ActivatedRoute) { }

  @Input() university: University | undefined;

  ngOnInit(): void {
    
  }

}
