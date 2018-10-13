import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../../environments/environment";
import { Image } from "./image";

let headers = new Headers({ "Content-Type": "application/json" });

@Injectable({
  providedIn: "root"
})
export class ImageService {
  noAuthHeader = { headers: new HttpHeaders({ NoAuth: "True" }) };

  constructor(private http: HttpClient) {}

  getRandom() {
    return this.http.get<Image>(environment.apiBaseUrl + "image/random");
  }

  getPage(page: number) {
    return this.http.get<Image[]>(
      environment.apiBaseUrl + "image/pages/" + page
    );
  }

  getPageLength() {
    return this.http.get<string>(environment.apiBaseUrl + "image/pagelength");
  }

  getOne(id: string) {
    return this.http.get<Image>(
      environment.apiBaseUrl + "image/imagedetail/" + id
    );
  }

  getFavorites() {
    return this.http.get<Image[]>(environment.apiBaseUrl + "image/favorites");
  }

  removeFavorite(id: string) {
    return this.http.request(
      "delete",
      environment.apiBaseUrl + "image/favorites/" + id
    );
  }

  getMyImages() {
    return this.http.get<Image[]>(environment.apiBaseUrl + "image/myimages");
  }

  saveOne(id: string) {
    return this.http.post<string>(environment.apiBaseUrl + "image/favorites", {
      imageId: id
    });
  }

  deleteOne(id: string) {
    return this.http.delete(
      environment.apiBaseUrl + "image/upload/image/" + id
    );
  }

  uploadImage(image: File): any {
    const formData: FormData = new FormData();
    formData.append("image", image, image.name);
    return this.http.post(
      environment.apiBaseUrl + "image/upload/image",
      formData
    );
  }

  uploadImageData(imageData: any) {
    return this.http.post<any>(
      environment.apiBaseUrl + "image/upload/data",
      imageData
    );
  }

  postComment(id: string, message: string) {
    return this.http.post<string>(environment.apiBaseUrl + "image/comment/" + id, {
      message: message
    });
  }
}
