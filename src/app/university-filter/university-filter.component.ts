import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filter } from '../interfaces/filter';
import { DirectionService } from '../services/direction.service';
import { SpecialtyService } from '../services/specialty.service';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-university-filter',
  templateUrl: './university-filter.component.html',
  styleUrls: ['./university-filter.component.scss']
})
export class UniversityFilterComponent implements OnInit {

  constructor(
    private directionService: DirectionService,
    private universityService: UniversityService,
    private specilatyService: SpecialtyService) { }

  filter: Filter = {};
  @Output() filterEvent = new EventEmitter<Filter>();

  universityAbbreviations: string[] = [];
  specialtyNames: string[] = [];
  directionNames: string[] = [];

  ngOnInit(): void {
    this.updateNames();
  }

  updateNames(): void {
    console.log(this.filter);
    

    this.getUnivesityAbbreviations();
    this.getSpecialtyNames();
    this.getDirectionNames();    
  }

  getUnivesityAbbreviations(): void {
    this.universityService.getUniversityAbbreviations(this.filter)
      .subscribe(a => this.universityAbbreviations = a);
  }

  getSpecialtyNames(): void {
    this.specilatyService.getSpecialtyNames(this.filter)
      .subscribe(n => this.specialtyNames = n);
  }
  
  getDirectionNames(): void {
    this.directionService.getDirectionNames(this.filter)
      .subscribe(n => this.directionNames = n);
  }

  search() {
    this.filterEvent.emit(this.filter);
  }

}
