import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import AOS from 'aos';
declare var require: any;
const VanillaTilt = require('vanilla-tilt');

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  gameData: Array<any> = [];
  gamePrediction: Array<any> = [];
  TeamID: string;
  TeamName: string;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.TeamID = localStorage.getItem('TeamID');
    this.TeamName = localStorage.getItem('TeamName');
    this.http.get("https://api.squiggle.com.au/?q=games;year=2019")
    .subscribe((data:any)=>{
    this.gameData = data.games;
    if(this.TeamID!=''){
    this.filterTeamID(this.TeamID);
    }
    });

    this.http.get("https://api.squiggle.com.au/?q=tips;year=2019")
    .subscribe((data:any)=>{
    this.gamePrediction = data.tips;
    if(this.TeamID!=''){
    this.filterTeamPrediction(this.TeamID);
    }
    });

    
    VanillaTilt.init(document.querySelectorAll('.test'), {
      max: 2,
      speed: 1000,
      perspective: 1000,
    });

    AOS.init({
      delay: 700,
    });
  }

  filterTeamID(teamID: any) {

    this.gameData = this.gameData.filter(item => item.round >= 20  &&  (item.hteamid == teamID || item.ateamid == teamID));
    this.gameData = this.gameData.slice(0,5);
    this.gameData.map((item)=>{
      if(item.hteamid==teamID){
        var temp = item.ateam;
        var temp_id = item.ateamid;
        item.ateam = item.hteam;
        item.ateamid = item.hteamid;
        item.hteam = temp;
        item.hteamid = temp_id;
      }
      });
    
  }

  filterTeamPrediction(teamID: any) {
    this.gamePrediction = this.gamePrediction.filter(item => item.round >= 20  &&  (item.hteamid == teamID || item.ateamid == teamID));
    this.gamePrediction = this.gamePrediction.slice(0,5);
    this.gamePrediction.map((item)=>{
      if(item.hteamid==teamID){
        var temp = item.ateam;
        var temp_id = item.ateamid;
        var tempConfidence = item.aconfidence;
        
        item.ateam = item.hteam;
        item.ateamid = item.hteamid;
        item.aconfidence = item.confidence;

        item.hteam = temp;
        item.hteamid = temp_id;
        item.confidence = tempConfidence;
      }
  });}


}
