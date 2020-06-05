import { Component, OnInit, Input } from '@angular/core';
import {Team} from '../team';
import { HttpClient } from '@angular/common/http';
import AOS from 'aos';

import {DashboardComponent} from '../dashboard/dashboard.component'

declare var require: any;
const VanillaTilt = require('vanilla-tilt');
@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

  gameData: Array<any> = [];
  TeamID: string;

  TeamName: string;


  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
}
