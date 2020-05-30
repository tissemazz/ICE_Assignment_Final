import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, filter } from "rxjs/operators";
import AOS from 'aos';

declare var require: any;
const VanillaTilt = require('vanilla-tilt');
declare var $: any;

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  gameData: Array<any> = [];
  filteredGameData: Array<any> = [];
  teamData: Array<any> = [];


  // IMG_BASE_URL = 'https://squiggle.com.au';

  constructor(private http: HttpClient) { }

  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "help",
        message: `<h3 class="p-0 m-0">Hey There!</h3> Please Select Your Team First and then Rival Team Second`

    },{
        type: type[color],
        timer: 4000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}

  ngOnInit() {
    this.http.get("https://api.squiggle.com.au/?q=games;year=2019")
    .subscribe((data:any)=>{
    this.gameData = data.games;
    });
    this.http.get("https://api.squiggle.com.au/?q=teams")
    .subscribe((data:any)=>{
      this.teamData = data.teams;
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

  getTeam_1_Games(TeamID: string){

    this.filteredGameData = this.gameData.filter(item => item.round < 20 && (item.ateamid==TeamID || item.hteamid ==TeamID));
    this.filteredGameData.map((item)=>{
      if(item.hteamid==TeamID){
        var temp = item.ateam;
        var temp_id = item.ateamid;
        item.ateam = item.hteam;
        item.ateamid = item.hteamid;
        item.hteam = temp;
        item.hteamid = temp_id;
      }
    });
  }

  getTeam_2_Games(TeamID: any){
    this.filteredGameData = this.filteredGameData.filter(item => item.hteamid ==TeamID);
  }

}
