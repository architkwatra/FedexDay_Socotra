import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('Your form data :', form.value);
    alert("We have received your submission successfully. Stay tuned for result.");
    form.reset();
  }
}
