import { ObserversModule } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observer } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { SnackbarComponent } from '../../snackbar/snackbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login(log: NgForm) {
    console.log(log.value["username"] + ", " + log.value["hash"]);
    this.userService.login(log.value["username"], log.value["hash"]).subscribe({
      error: err => {
        this.openSnackBar("Wrong login or password! Please, try again.", false);
      },
      complete: () => {
        localStorage.setItem("username", log.value["username"]);
        localStorage.setItem("hash", log.value["hash"]);
        this.openSnackBar("You have successfully logged in!", true);
      },
    })

  }

  openSnackBar(message: string, success: boolean) {
    let sb = this.snackBar.openFromComponent(SnackbarComponent, {
      data: { message: message },
      duration: 8000,
      panelClass: success ? "success-style" : "error-style",
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
    sb.onAction().subscribe(() => {
      sb.dismiss();
    });
  }

}
