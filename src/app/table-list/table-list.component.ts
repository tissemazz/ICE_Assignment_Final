import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

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

  filterTeamName(teamName: any) {
    this.gameData = this.gameData.filter(item =>  item.round >= 20 &&  item.hteam ==this.TeamName || item.ateam==this.TeamName);
    // this.gameData = this.gameData.slice(0,5);
    console.log(this.gameData);
  }

}
