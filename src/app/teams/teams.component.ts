import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  info: any = {};
  showModal = "none";
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
}
