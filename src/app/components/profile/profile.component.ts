import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";

import { User } from "../../shared/user/user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.user = res["user"];
      },
      err => {}
    );
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(["/home"]);
  }
}
