import { Component, OnInit, Inject } from "@angular/core";
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import { ImageService } from "../../shared/image/image.service";
import { UserService } from "../../shared/user/user.service";

import { Image } from "../../shared/image/image";

@Component({
  selector: "app-image-detail",
  templateUrl: "./image-detail.component.html",
  styleUrls: ["./image-detail.component.css"]
})
export class ImageDetailComponent implements OnInit {
  image: Image;
  commentForm: FormGroup;
  loggedIn: boolean = false;

  constructor(
    @Inject("BaseURL") private BaseURL,
    private location: Location,
    private imageService: ImageService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    let id = this.location.path().slice(13);
    this.imageService.getOne(id).subscribe(image => {
      this.image = image;
    });
    if (this.userService.getToken()) {
      this.loggedIn = true;
    }
  }

  createForm() {
    this.commentForm = this.fb.group({
      message: ["", Validators.required]
    });
  }

  saveSelected(id: string) {
    this.imageService
      .saveOne(id)
      .subscribe(res => alert("Image Saved"), err => alert(err.message));
  }

  onSubmit(id: string) {
    this.imageService.postComment(id, this.commentForm.value.message).subscribe(
      res => {
        let id = this.location.path().slice(13);
        this.imageService.getOne(id).subscribe(image => {
          this.image = image;
        });
        this.commentForm.reset({ message: "" });
      },
      err => alert(err.message)
    );
  }
}
