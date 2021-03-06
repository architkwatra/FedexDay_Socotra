import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertModule} from "ngx-bootstrap/alert";
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { QuarterItemComponent } from './quarter-item/quarter-item.component';
import { TeamsComponent } from './teams/teams.component';
import { TimelineComponent } from './timeline/timeline.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";
import { AlertComponent } from './alert/alert.component';
import { TeamsInfoComponent } from './teams-info/teams-info.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SubmissionsComponent,
    QuarterItemComponent,
    TeamsComponent,
    TimelineComponent,
    AlertComponent,
    TeamsInfoComponent,
    FooterComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
