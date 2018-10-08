import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";

import { UserService } from "../../shared/user/user.service";

import { SignInComponent } from "../sign-in/sign-in.component";
import { SignUpComponent } from "../sign-up/sign-up.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(public dialog: MatDialog, private userService: UserService) {}

  ngOnInit() {
    if (this.userService.getToken()) {
      this.loggedIn = true;
    }
  }

  openSignUp() {
    let dialogRef = this.dialog.open(SignUpComponent, {
      width: "250px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        alert("registration successful!");
      } else {
        alert(result);
      }
    });
  }

  openSignIn() {
    let dialogRef = this.dialog.open(SignInComponent, {
      width: "250px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.loggedIn = true;
      } else {
        alert(result);
      }
    });
  }

  logOut() {
    this.userService.deleteToken();
    this.loggedIn = false;
  }
}
