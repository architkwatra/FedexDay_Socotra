import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProjectInfoComponent} from "./project-info/project-info.component";
import {SubmissionsComponent} from "./submissions/submissions.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project-info', component: ProjectInfoComponent },
  { path: 'submissions', component: SubmissionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
