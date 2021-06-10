import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userInfo: any;

  constructor() { }

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }

}
