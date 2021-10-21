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
  projectTitle = new FormControl('');
  projectDescription = new FormControl('');
  submitter = new FormControl('');
  alertMessage = "";
  showAlert = false;

  constructor(public globalService: GlobalService) { }

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
    let check = false;
    this.globalService.currQuarterProjectsData.forEach((obj) => {
      if (obj.projectTitle == this.projectTitle.value) {
        this.displayAlert("Project title already exisits");
        check = true;
        return;
      }
    });

    if (!check) {
      let temp = {projectTitle: "", projectDescription:"", submitter: ""};
      temp.projectTitle = this.projectTitle.value;
      temp.projectDescription = this.projectDescription.value;
      temp.submitter = this.submitter.value;
      this.globalService.currQuarterProjectsData.push(temp);
    }
    this.showModal = "none";
    this.clearForm();
  }

  displayAlert(message: string) {
    this.alertMessage = message;
    this.showAlert = true;
  }

  toggleAlert() {
    if (this.showAlert === false)
      this.showAlert = true;
    else
      this.showAlert = false;
  }

  openProjectInfoModal() {
    this.showModal = "block";
  }

  clearForm() {
    this.projectTitle.setValue("");
    this.projectDescription.setValue("");
    this.submitter.setValue("");
  }
}
