import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  form: FormGroup | any;
  submitted = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private recaptchaV3Service: ReCaptchaV3Service,
    private renderer: Renderer2,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'recaptcha');

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null),
      password: new FormControl(null, [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*-?&])[A-Za-z\d$@$!%*-?&].{7,}")]),
      confirmPassword: new FormControl(null, [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*-?&])[A-Za-z\d$@$!%*-?&].{7,}")]),
      recaptchaToken: new FormControl(null),
      errorField: new FormControl(null)
    });

    this.form.setValidators(ConfirmedValidator('password', 'confirmPassword'));
  }

  clearErrorField() {
    this.form.get('errorField').setErrors( null );
  }

  async submit(): Promise<void> {
    this.spinnerService.show();

    if (this.form.invalid) {
      return;
    }

    await this.recaptchaV3Service.execute("login")
      .toPromise().then((token) => { this.form.patchValue({ recaptchaToken: token }) });

    this.submitted = true;

    const user = {
      email: this.form.value.email,
      username: this.form.value.email,
      password: this.form.value.password,
      confirmPassword: this.form.value.confirmPassword,
      recaptchaToken: this.form.value.recaptchaToken
    }

    this.auth.register(user).subscribe(() => {
      this.form.reset;
      this.submitted = false;
      this.router.navigate(['/client', 'profile']);
      this.spinnerService.hide();
    }, (err) => {
      this.form.get('errorField').setErrors({
        serverError: err.error.message
      });
      this.submitted = false;
      this.spinnerService.hide();
    })
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'recaptcha');
  }
}