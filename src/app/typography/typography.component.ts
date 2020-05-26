import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  }

  // filterTeamID(teamID: any) {
  //   this.gameData = this.gameData.filter(item => item.ateamid==this.TeamID || item.hteamid == this.TeamID);
  //   console.log(this.gameData)
  // }

  filterTeamName(teamName: any) {
    this.gameData = this.gameData.filter(item => item.winner==this.TeamName && item.round < 20);
    console.log(this.gameData);
  }

}
