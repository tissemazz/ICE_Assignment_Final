import { Component, OnInit} from '@angular/core';

import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {


  constructor() {
  }

  ngOnInit() {
    introJs().start();
  }

}
