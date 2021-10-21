import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showModal = "none";
  data: any = {};
  favoriteColorControl = new FormControl('');


  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(event: any) {
    event.preventDefault();
    if (this.showModal == "none")
      this.showModal = "block";
    else
      this.showModal = "none";
  }

  saveInfo() {}

  openProjectInfoModal() {
    this.showModal = "block";
  }
}
