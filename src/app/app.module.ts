import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertModule} from "ngx-bootstrap/alert";
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { QuarterItemComponent } from './quarter-item/quarter-item.component';
import { AddProjectModalComponent } from './add-project-modal/add-project-modal.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { TeamsComponent } from './teams/teams.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SubmissionsComponent,
    QuarterItemComponent,
    AddProjectModalComponent,
    ProjectInfoComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
