import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProjectInfoComponent} from "./project-info/project-info.component";
import {SubmissionsComponent} from "./submissions/submissions.component";
import {TeamsComponent} from "./teams/teams.component";
import {TimelineComponent} from "./timeline/timeline.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project-info', component: ProjectInfoComponent },
  { path: 'submissions', component: SubmissionsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'timeline', component: TimelineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
