import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  question;
  id;

  constructor(private _route: ActivatedRoute, private _surveyService: SurveyService, private router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe( params => {
      console.log('from passing by params',params.get('id'));
      this.id = params.get('id');
    })
    this._surveyService.getOnePoll(this.id, (data)=>{
      this.question = data;
      console.log(data);
    })
  }

  onClickVote(answerId){
    this._surveyService.vote(answerId);
    this.ngOnInit();
  }

}
