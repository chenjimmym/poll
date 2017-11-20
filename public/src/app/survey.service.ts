import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SurveyService {

  loggedUser;

  constructor(private _http: Http) { }

  setLoggedUser(user){
    this.loggedUser = user;
    console.log('Setted LoggedUser in Service', this.loggedUser);
  }

  getLoggedUser(){
    return  this.loggedUser;
  }

  addQuestion(asker, question){
    console.log('from service', question);
    this._http.post('/addquestion', {asker: asker, question: question}).subscribe();
  }

  addOption(question, option1, option2, option3, option4){
    console.log('from service', option2);
    this._http.post('/addoptions', {question: question, option1: option1, option2:option2, option3:option3, option4:option4}).subscribe();
  }

  getAllPolls(callback){
    this._http.get('/polls').subscribe(
      (response) => {
        callback(response.json())
      },
      (err) => {console.log(err);}
    )
  }

  getOnePoll(id, callback){
    this._http.get(`/poll/${id}`).subscribe(
      (response) => {
        callback(response.json())
      },
      (err) => {console.log(err);}
    )
  }

  vote(id){
    this._http.post('/vote', {id: id}).subscribe();
  }

}
