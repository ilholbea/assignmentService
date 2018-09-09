import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from "../service/alert-service";
import {RestApi} from "../service/rest-api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private restApi: RestApi,
    private alertService: AlertService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstNameFormControl: ['', [Validators.required]],
      lastNameFormControl: ['', [Validators.required]],
      userNameFormControl: ['', [Validators.required]],
      passwordFormControl: ['', [Validators.required]],
      emailFormControl: ['', [Validators.email, Validators.required]],
    });
  }


  register() {
    this.loading = true;
    this.restApi.create(this.model)
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  cancel() {
    this.router.navigateByUrl("/login");
  }
}
