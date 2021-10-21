import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showModal = "none";
  // data: Array<any> = [];
  projectTitle = new FormControl('');
  projectDescription = new FormControl('');
  submitter = new FormControl('');
  alertMessage = "";
  showAlert = false;

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  toggleModal(event: any) {
    event.preventDefault();
    if (this.showModal == "none")
      this.showModal = "block";
    else
      this.showModal = "none";
  }

  saveInfo() {
    this.globalService.currQuarterProjectsData.forEach((obj) => {
      if (obj.projectTitle == this.projectTitle.value) {
        this.displayAlert("Project title already exisits");
      }
    });

    let temp = {projectTitle: "", projectDescription:"", submitter: ""};
    temp.projectTitle = this.projectTitle.value;
    temp.projectDescription = this.projectDescription.value;
    temp.submitter = this.submitter.value;
    this.globalService.currQuarterProjectsData.push(temp);
    this.showModal = "none";
  }

  displayAlert(message: string) {
    this.alertMessage = message;
    this.showAlert = true;
  }

  closeAlert() {}

  openProjectInfoModal() {
    this.showModal = "block";
  }
}
