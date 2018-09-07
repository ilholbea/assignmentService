import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchBarComponent} from './home/search-bar/search-bar.component';
import {RestApi} from "./service/rest-api";
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,} from '@angular/material';

const routes = [{
  path: 'home',
  component: HomeComponent
},
  {
    path: '**',
    redirectTo: '/home'
  }];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    ),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [RestApi],
  bootstrap: [AppComponent]
})
export class AppModule {
}
