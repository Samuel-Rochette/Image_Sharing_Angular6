import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";

import { UserService } from "../../shared/user/user.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SignUpComponent>,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.registerForm = this.fb.group({
      email: "",
      username: "",
      password: ""
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.userService.postUser(this.registerForm.value).subscribe(
      res => {
        this.dialogRef.close(true);
      },
      err => {
        this.dialogRef.close(err.message);
      }
    );
  }
}
