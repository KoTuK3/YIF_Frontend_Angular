import { Component, Input, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../interfaces/userProfile';

@Component({
  selector: 'app-graduate-card',
  templateUrl: './graduate-card.component.html',
  styleUrls: ['./graduate-card.component.scss']
})
export class GraduateCardComponent implements OnInit {

  constructor(
    private userProfileService: UserProfileService
  ) { }

  @Input() profile: UserProfile | undefined;

  ngOnInit(): void {

  }

}
