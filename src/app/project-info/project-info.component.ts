import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  showModal = "none"

  constructor(private router:Router) {
    this.showModal = "block";
  }

  ngOnInit(): void {
  }

  toggleModal() {
    if (this.showModal == "none")
      this.showModal = "block";
    else
      this.showModal = "none";
    this.router.navigate(['/']);
  }
}
