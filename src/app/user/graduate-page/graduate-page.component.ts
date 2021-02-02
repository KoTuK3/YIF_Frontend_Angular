import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../interfaces/userProfile';

@Component({
  selector: 'app-graduate-page',
  templateUrl: './graduate-page.component.html',
  styleUrls: ['./graduate-page.component.scss']
})
export class GraduatePageComponent implements OnInit {

  constructor(
    private userProfileService: UserProfileService
  ) { }

  userProfile: UserProfile | undefined;
  isError = false;

  ngOnInit(): void {
    this.getGraduate();
  }

  getGraduate(): void {
    this.userProfileService.getProfile()
      .subscribe(
        response => {
        this.userProfile = response;
      },
        error => {
          this.isError = true;
      }
      );
  }
}
