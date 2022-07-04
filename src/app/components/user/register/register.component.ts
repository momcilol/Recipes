import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  register(reg: NgForm) {
    console.log("Registering started")
    console.log("Username: " + reg.controls["username"].value)
    this.userService.register(reg.value["username"]).subscribe(
      (res) => {
        this.dialog.open(RegisterDialogComponent, {data: res}).disableClose = true;
      }
    )
  }
}
