import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './core/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { AuthService } from './services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/initial-page/signup/signup.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrendingBooksComponent } from './components/home/trending-books/trending-books.component';
import { MaterialModule } from './core/shared/material.module';
import { LoginComponent } from './components/initial-page/login/login.component';
import { SingleBook } from './components/home/single-book/single-book.component.';
import { RatingComponent } from './components/home/single-book/rating-book/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SignupComponent,
    InitialPageComponent,
    TrendingBooksComponent,
    LoginComponent,
    SingleBook,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    ErrorStateMatcher,
    ShowOnDirtyErrorStateMatcher,
    AuthService,
    HttpClient,
  ],
  exports: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
