import { Component, OnInit } from '@angular/core';
import {Team} from '../team';
import { HttpClient } from '@angular/common/http';
import AOS from 'aos';
import {DashboardComponent} from '../dashboard/dashboard.component';

declare var require: any;
const VanillaTilt = require('vanilla-tilt');

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.css']
})

export class LadderComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  ladderData: Array<any> = [];
  position: any;
  
  ngOnInit(): void {
    
    this.http.get("https://api.squiggle.com.au/?q=standings;year=2019;round=20")
    .subscribe((data:any)=>{
    this.ladderData = data.ladder;


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

  getLadder(){

  }
}
