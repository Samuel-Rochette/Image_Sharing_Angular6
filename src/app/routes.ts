import { Routes } from "@angular/router";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { HomeComponent } from "./components/home/home.component";
import { ImageDetailComponent } from "./components/image-detail/image-detail.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { PrivateGalleryComponent } from "./components/private-gallery/private-gallery.component";
import { AuthGuard } from "./auth/auth.guard";

export const appRoutes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "images/:gallery",
    component: GalleryComponent
  },
  {
    path: "imagedetail/:id",
    component: ImageDetailComponent
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "favorites",
    component: PrivateGalleryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "myimages",
    component: PrivateGalleryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":*",
    redirectTo: "/home",
    pathMatch: "full"
  }
];
