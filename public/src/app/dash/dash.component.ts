import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  loggedUser;
  polls;

  constructor(private _surveyService: SurveyService, private router: Router) { }

  ngOnInit() {
    this.loggedUser = this._surveyService.getLoggedUser();
    this._surveyService.getAllPolls((data) => {
      // console.log(data);
      this.polls = data;
      console.log(this.polls);
    })
  }

  onClickShow(questionId){
    this.router.navigate(['vote', questionId]);
  }

  onClickDelete(questionId){
    console.log('onAng', questionId);
    this._surveyService.deletePoll(questionId);
    this.ngOnInit();
  }

}
