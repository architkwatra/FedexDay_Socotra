import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.scss']
})
export class AddProjectModalComponent implements OnInit {

  showModal = "none";
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.showModal = "block";
  }

  toggleModal() {
    if (this.showModal == "none")
      this.showModal = "block";
    else
      this.showModal = "none";
    this.router.navigate(['/']);
  }
  saveInfo(){}
}
