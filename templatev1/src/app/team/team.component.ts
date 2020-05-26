import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  /*  let resp = this.http.get("https://api.squiggle.com.au/?q=teams");
    resp.subscribe((data) => this.teams = data);*/


  }

  getAppointmentDetails(): Observable<any> {
    return this.http.get("https://api.squiggle.com.au/?q=teams");
  }

  getTeams() {
    this.getAppointmentDetails().subscribe(teamss => {
      this.teams = teamss;
    }
    );
  }


}
