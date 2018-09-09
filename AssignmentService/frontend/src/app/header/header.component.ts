import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../service/authentication-service";
import {Router} from "@angular/router";
import {User} from "../model/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  users: User[] = [];

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }


  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl("/login");
  }
}
