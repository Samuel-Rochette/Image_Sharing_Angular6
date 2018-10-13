import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import { UserService } from "../../shared/user/user.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SignInComponent>,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onCancel() {
    this.dialogRef.close(2);
  }

  onSubmit() {
    this.userService.login(this.loginForm.value).subscribe(
      res => {
        this.userService.setToken(res["token"]);
        this.dialogRef.close(1);
      },
      err => {
        this.dialogRef.close(err.message);
      }
    );
  }
}
