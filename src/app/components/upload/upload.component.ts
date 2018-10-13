import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";

import { ImageService } from "../../shared/image/image.service";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"]
})
export class UploadComponent implements OnInit {
  uploadForm: FormGroup;
  selectedFile: File = null;

  constructor(
    public dialogRef: MatDialogRef<UploadComponent>,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private imageService: ImageService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.uploadForm = this.fb.group({
      name: ["", Validators.required],
      description: ""
    });
  }

  onFileChange(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onCancel() {
    this.dialogRef.close(2);
  }

  onSubmit() {
    this.imageService.uploadImage(this.selectedFile).subscribe(
      res => {
        this.imageService
          .uploadImageData({
            id: res._id,
            name: this.uploadForm.value.name,
            description: this.uploadForm.value.description
          })
          .subscribe(
            res => {
              this.dialogRef.close(1);
            },
            err => {
              this.dialogRef.close(err.message);
            }
          );
      },
      err => {
        console.log(err.message);
      }
    );
  }
}
