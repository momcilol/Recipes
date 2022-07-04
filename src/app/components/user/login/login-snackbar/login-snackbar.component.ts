import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-snackbar',
  templateUrl: './login-snackbar.component.html',
  styleUrls: ['./login-snackbar.component.scss']
})
export class LoginSnackbarComponent implements OnInit {

  constructor(
    public sbRef: MatSnackBarRef<LoginSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}

  ngOnInit(): void {
  }

}
