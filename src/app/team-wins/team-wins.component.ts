import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, filter } from "rxjs/operators";
import AOS from 'aos';

declare var $: any;
declare var require: any;
const VanillaTilt = require('vanilla-tilt');

@Component({
  selector: 'app-team-wins',
  templateUrl: './team-wins.component.html',
  styleUrls: ['./team-wins.component.css']
})

export class TeamWinsComponent implements OnInit {

  gameData: Array<any> = [];
  TeamID: string;
  TeamName: string;
  pick_round: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.pick_round = "none";
    this.run();
  }

  run() {
    this.TeamID = localStorage.getItem('TeamID');
    this.TeamName = localStorage.getItem('TeamName');
    
    this.http.get("https://api.squiggle.com.au/?q=games;year=2019;round=" + this.pick_round)
      .subscribe((data: any) => {
        this.gameData = data.games;
        if (this.TeamID != '') {
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
    this.gameData = this.gameData.filter(item => (item.ateamid == this.TeamID || item.hteamid == this.TeamID) && item.winnerteamid == teamID);
    this.gameData.map((item) => {
    });
  }

}