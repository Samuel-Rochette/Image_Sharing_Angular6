import { Component, OnInit, Inject } from "@angular/core";
import { Location } from "@angular/common";
import { ImageService } from "../../shared/image/image.service";

import { Image } from "../../shared/image/image";

@Component({
  selector: "app-image-detail",
  templateUrl: "./image-detail.component.html",
  styleUrls: ["./image-detail.component.css"]
})
export class ImageDetailComponent implements OnInit {
  image: Image;

  constructor(
    @Inject("BaseURL") private BaseURL,
    private location: Location,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    let id = this.location.path().slice(13);
    this.imageService.getOne(id).subscribe(image => {
      this.image = image;
    });
  }
}
