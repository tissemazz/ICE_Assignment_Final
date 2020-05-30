import { Component, OnInit, Input } from '@angular/core';
import {Team} from '../team';
import { HttpClient } from '@angular/common/http';
import AOS from 'aos';

import {DashboardComponent} from '../dashboard/dashboard.component'

declare var require: any;
const VanillaTilt = require('vanilla-tilt');
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  gameData: Array<any> = [];
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
    this.gameData = this.gameData.filter(item => item.ateamid==this.TeamID || item.hteamid == this.TeamID && item.round < 20);
    this.gameData.map((item)=>{
      if(item.hteamid==teamID){
        var temp = item.ateam;
        item.ateam = item.hteam;
        item.hteam = temp;
      }
      });
  }
    
  }


