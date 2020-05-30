import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Select Team',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Games',  icon:'sports_football', class: '' },
    { path: '/table-list', title: 'Upcoming Games',  icon:'skip_next', class: '' },
    { path: '/typography', title: 'Venues',  icon:'emoji_events', class: '' },
    { path: '/icons', title: 'Head To Head',  icon:'people_alt', class: '' },
    { path: '/maps', title: 'Rival Games',  icon:'security', class: '' },
    { path: '/notifications', title: 'Extras',  icon:'notifications', class: '' },
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
