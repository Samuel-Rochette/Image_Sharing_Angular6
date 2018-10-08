import { Component, OnInit, Inject } from "@angular/core";
import { ImageService } from "../../shared/image/image.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  path: string;

  constructor(
    @Inject("BaseURL") private BaseURL,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.imageService.getRandom().subscribe(res => (this.path = res.path));
  }

  getNewRandom() {
    this.imageService.getRandom().subscribe(res => (this.path = res.path));
  }
}
