import { Component, OnInit, Input } from '@angular/core';
import {Team} from '../team';
import { HttpClient } from '@angular/common/http';
import AOS from 'aos';
import { map, filter } from "rxjs/operators";
import { Router } from '@angular/router';

declare var require: any;
const VanillaTilt = require('vanilla-tilt');

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.css']
})

export class LadderComponent implements OnInit {
  
  teamStandings: Array<any> = [];


  constructor(private http: HttpClient, private router: Router ) { }
  
  rank: any;
  
  ngOnInit(): void {
    this.http.get("https://api.squiggle.com.au/?q=standings;year=2019;round=20")
      .subscribe((data: any) => {
    this.teamStandings = data.standings;
    });

    VanillaTilt.init(document.querySelectorAll('.test'), {
      max: 2,
      speed: 1000,
      perspective: 1000,
    });

    AOS.init({
      delay: 700,
    });
  };

  rankData() {
    console.log(this.teamStandings)
    this.teamStandings.map((item) => {
      item.rank
      item.name
      item.wins
      item.losses
      item.pts
    });
  }


}
