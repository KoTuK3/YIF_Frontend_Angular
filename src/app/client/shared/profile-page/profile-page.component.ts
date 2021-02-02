import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  form: FormGroup | any;

  constructor(
    private clientService: ClientService,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.form = new FormGroup({
      // client name 
      name: new FormControl(null, Validators.required),

      // client middle name 
      middleName: new FormControl(null, Validators.required),

      // client surname 
      surname: new FormControl(null, Validators.required),

      // client photo 
      photo: new FormControl(null, Validators.required),

      // client phone 
      phone: new FormControl(null, Validators.required),

      // client email
      email: new FormControl(null, Validators.required),
      school: new FormControl(null, Validators.required)
    });

    this.clientService.getClientProfile().subscribe(res => {
      console.log("GET USER INFO: ", res);
      this.form.patchValue(
        {
          ...res,
          phone: res.phoneNumber === null ? "+380" : res.phoneNumber,
          school: res.schoolName
        });
      this.spinnerService.hide();
    },
      err => {
        console.log("ERROR GET USER INFO: ", err);
        this.spinnerService.hide();
      })
  }
}
