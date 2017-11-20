import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from './../survey.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedUser;

  constructor(private router: Router, private _surveyService: SurveyService) { }

  ngOnInit() {
  }
  
  onLogin(){
    console.log('onLogin', this.loggedUser);
    this._surveyService.setLoggedUser(this.loggedUser);
    this.router.navigate(['/dash']);
  }

}
