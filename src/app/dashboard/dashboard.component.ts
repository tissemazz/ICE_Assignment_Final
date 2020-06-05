import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, filter } from "rxjs/operators";
import { Router } from '@angular/router';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import AOS from 'aos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  teams = [];
  games: any;

  TeamName: any;

  responseData: any

  IMG_BASE_URL = 'https://squiggle.com.au';

  constructor(private http: HttpClient, private router: Router ) { }
 
  ngOnInit() {
    this.http.get("https://api.squiggle.com.au/?q=teams")
    .pipe(map(teams => {
      const result = teams['teams'];
      result.forEach(team => team['logo'] = this.IMG_BASE_URL + team['logo'] );
      return result;
    }))
    .subscribe(
      res => { this.responseData = res; },
      err => { console.log(err); },
      () => { console.log(this.responseData); }
    );

    AOS.init({
      delay: 700,
    });
   
  }

  getTeamGames(TeamID: string, TeamName: string){
    console.log(TeamID);
    console.log(TeamName);
    localStorage.setItem('TeamID' , TeamID);
    localStorage.setItem('TeamName' , TeamName);
    let userProfileObj = new UserProfileComponent(this.http);
    this.router.navigate(['/user-profile'])
      .catch(console.error); 
  }

}
