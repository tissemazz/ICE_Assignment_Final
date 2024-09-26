import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/news', title: 'News',  icon:'tv', class: '' },
    { path: '/ladder', title: '2019 Ladder',  icon:'format_list_numbered', class: '' },
    { path: '/dashboard', title: '1. Select Team',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: '2. Games',  icon:'sports_football', class: '' },
    { path: '/table-list', title: '3. Upcoming Games',  icon:'skip_next', class: '' },
    { path: '/typography', title: '4. Venues',  icon:'emoji_events', class: '' },
    { path: '/team-wins', title: "5. My Team's Wins", icon:'trending_up', class:''},
    { path: '/icons', title: '6. Head To Head',  icon:'people_alt', class: '' },
    { path: '/maps', title: '7. Rival Games',  icon:'security', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
