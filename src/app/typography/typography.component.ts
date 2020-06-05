import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import AOS from 'aos';
declare var require: any;
const VanillaTilt = require('vanilla-tilt');

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

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
    if(this.TeamName!=''){
    this.filterTeamName(this.TeamName);
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
  
  filterTeamName(teamName: any) {
    this.gameData = this.gameData.filter(item => item.winner==this.TeamName && item.round < 20);
    this.gameData.map((item)=>{
      if(item.hteam==teamName){
        var temp = item.ateam;
        item.ateam = item.hteam;
        item.hteam = temp;
      }
      });
    console.log(this.gameData);
  }

}
