import { Component, OnInit, Input } from '@angular/core';
import {Team} from '../team';
import { HttpClient } from '@angular/common/http';


import {DashboardComponent} from '../dashboard/dashboard.component'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  gameData: Array<any> = [];
  TeamID: string;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.TeamID = localStorage.getItem('TeamID');
    this.http.get("https://api.squiggle.com.au/?q=games;year=2019")
    .subscribe((data:any)=>{
    this.gameData = data.games;
    if(this.TeamID!=''){
    this.filterTeamID(this.TeamID);
    }
    
    });
  }

  filterTeamID(teamID: any) {
    this.gameData = this.gameData.filter(item => item.ateamid==this.TeamID || item.hteamid == this.TeamID && item.round < 20);
  }
    
  }


