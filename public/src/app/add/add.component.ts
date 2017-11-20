import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  question;
  option1;
  option2;
  option3;
  option4;
  loggedUser;
  id;

  constructor(private router: Router, private _surveyService: SurveyService) { }

  ngOnInit() {
    this.loggedUser = this._surveyService.getLoggedUser();
  }

  onAddQuestion(){
    console.log(this.question);
    console.log(this.option1);
    console.log(this.option2);
    console.log(this.option3);
    console.log(this.option4);
    this._surveyService.addQuestion(this.loggedUser, this.question);
    this._surveyService.addOption(this.question, this.option1, this.option2, this.option3, this.option4);
    this.router.navigate(['/vote']);
  }


}
