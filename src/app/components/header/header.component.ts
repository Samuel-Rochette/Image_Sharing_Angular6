import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";

import { UserService } from "../../shared/user/user.service";

import { SignInComponent } from "../sign-in/sign-in.component";
import { SignUpComponent } from "../sign-up/sign-up.component";
import { UploadComponent } from "../upload/upload.component";

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
      if (result === 1) {
        alert("registration successful!");
      } else if (result === undefined || 2) {
        return;
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
      if (result === 1) {
        this.loggedIn = true;
      } else if (result === undefined || 2) {
        return;
      } else {
        alert(result);
      }
    });
  }

  openUploadDialogue() {
    let dialogRef = this.dialog.open(UploadComponent, {
      width: "300px"
    });
  }

  logout() {
    this.userService.deleteToken();
    this.loggedIn = false;
  }
}
