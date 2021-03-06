import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input()
  public title: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openRegister() {
    this.router.navigate(["/register"]);
  }

  openLogin() {
    this.router.navigate(["/login"]);
  }

  logout() {
    localStorage.setItem("username", "");
    localStorage.setItem("hash", "");
    this.router.navigate(["/login"]);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("username") && localStorage.getItem("hash") ? true : false;
  }
}
