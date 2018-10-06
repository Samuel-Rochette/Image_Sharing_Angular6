import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { ImageDetailComponent } from "./components/image-detail/image-detail.component";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from './components/profile/profile.component';
import { UserService } from "./shared/user/user.service";

import { appRoutes } from "./routes";

import { AuthGuard } from "./auth/auth.guard";
import { AuthInterceptor } from "./auth/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    GalleryComponent,
    ImageDetailComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    // UserService,
    // AuthGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    GalleryComponent,
    ImageDetailComponent,
    HomeComponent,
    ProfileComponent
  ]
})
export class AppModule {}
