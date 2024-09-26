import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import AOS from 'aos';
declare var require: any;
const VanillaTilt = require('vanilla-tilt');

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data)=>{
      this.articles = data['articles'];
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

}
