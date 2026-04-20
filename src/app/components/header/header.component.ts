import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      const user = localStorage.getItem('user');
      this.currentUser = user ? JSON.parse(user) : null;
    }
  });
  }

logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  // 🔥 force full app reset
  window.location.href = '/';
}
}