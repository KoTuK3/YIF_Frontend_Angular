import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../interfaces/userProfile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private userProfileService: UserProfileService,
    private route: Router
  ) { }

  profile: UserProfile | undefined;
  isError = false;

  ngOnInit(): void {
    this.getGraduate();
  }

  getGraduate(): void {
    this.userProfileService.getProfile()
      .subscribe(
        response => {
          this.profile = response;
        },
        error => {
          this.isError = true;
        }
      );
  }

  setGraduate(): void {
    this.userProfileService.postProfile(this.profile)
      .subscribe(
        response => {
          const responseProfile = response;
          if (responseProfile) {
            this.isError = false;
            this.route.navigate(['../user']);
          }
        },
        error => {
          this.isError = true;
        }
      );
  }
}
