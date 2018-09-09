import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from "../service/authentication-service";
import {AlertService} from "../service/alert-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../model/user";

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  loginForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userNameFormControl: ['', [Validators.required]],
      passwordFormControl: ['', [Validators.required]]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    let user: User = new User(0, this.model.username, this.model.password, '', '');
    this.authenticationService.login(user)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
        });
  }


  register() {
    this.router.navigateByUrl("/register");
  }
}
