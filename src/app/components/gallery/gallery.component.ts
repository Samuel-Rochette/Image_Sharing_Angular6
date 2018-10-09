import { Component, OnInit, Inject } from "@angular/core";
import { PageEvent } from "@angular/material";
import { Router } from "@angular/router";
import { ImageService } from "../../shared/image/image.service";

import { Image } from "../../shared/image/image";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  images: Image[];
  currentPage: number = 1;
  pageLength: string = "100";

  constructor(
    @Inject("BaseURL") private BaseURL,
    private imageService: ImageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.imageService.getPage(this.currentPage).subscribe(images => {
      this.images = images;
    });
    this.imageService.getPageLength().subscribe(length => {
      this.pageLength = length;
    });
  }

  onChangePage(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.imageService.getPage(this.currentPage + 1).subscribe(images => {
      this.images = images;
    });
  }

  onSelect(id: string) {
    this.router.navigateByUrl("/imagedetail/" + id);
  }
}
