import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { ImageService } from "../../shared/image/image.service";

import { Image } from "../../shared/image/image";

@Component({
  selector: "app-private-gallery",
  templateUrl: "./private-gallery.component.html",
  styleUrls: ["./private-gallery.component.css"]
})
export class PrivateGalleryComponent implements OnInit {
  images: Image[];
  isFavorite: boolean;

  constructor(
    @Inject("BaseURL") private BaseURL,
    private imageService: ImageService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    if (this.location.path() == "/favorites") {
      this.isFavorite = true;
      this.imageService.getFavorites().subscribe(images => {
        this.images = images;
      });
    } else if (this.location.path() == "/myimages") {
      this.isFavorite = false;
      this.imageService.getMyImages().subscribe(images => {
        this.images = images;
      });
    } else {
      this.router.navigateByUrl("/home");
    }
  }

  onSelect(id: string) {
    this.router.navigateByUrl("/imagedetail/" + id);
  }

  removeFavorite(id: string) {
    this.imageService.removeFavorite(id).subscribe(res => {
      console.log("removed from favorites");
    });
  }

  deleteImage(id: string) {
    this.imageService.deleteOne(id).subscribe(res => {
      console.log("image deleted");
    });
  }
}
