import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  alertMessage = "";
  showAlert = false;
  showModal = false;
  teamName = new FormControl('');
  teamMembers = new FormControl('');
  projectName = new FormControl('');
  projectDescription = new FormControl('');

  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
    this.showModal = false;
  }

  toggleModal() {
    if (this.showModal == true)
      this.showModal = false;
    else
      this.showModal = true;
    this.clearForm();
    // this.router.navigate(['/teams']);
  }

  saveInfo(){
    let check = false;
    this.globalService.currQuarterProjectsData.forEach((obj) => {
      if (obj.projectTitle == this.teamName.value) {
        this.displayAlert("Project title already exisits");
        check = true;
        return;
      }
    });

    if (!check) {
      let temp = {"teamName": this.teamName.value,
        "teamMembers": this.teamMembers.value,
        "projectName": this.projectName.value,
        "projectDescription": this.projectDescription.value};
      this.globalService.currQuarterTeamsData.push(temp);
    }

    this.clearForm();
    this.toggleModal();
  }

  clearForm() {
    this.teamName.setValue("");
    this.teamMembers.setValue("");
    this.projectName.setValue("");
    this.projectDescription.setValue("");
  }

  displayAlert(message: string) {
    this.alertMessage = message;
    this.showAlert = true;
  }
}
