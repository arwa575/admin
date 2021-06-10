import { AuthService } from '../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userInfo: any;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }

}
