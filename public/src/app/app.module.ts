import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { VoteComponent } from './vote/vote.component';
import { AddComponent } from './add/add.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import{ SurveyService } from './survey.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    VoteComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
