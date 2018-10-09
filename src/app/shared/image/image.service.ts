import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../../environments/environment";
import { Image } from "./image";

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
    return this.http.get<Image>(environment.apiBaseUrl + "image/imagedetail/" + id);
  }
}
