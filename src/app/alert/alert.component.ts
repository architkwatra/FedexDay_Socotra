import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() alertMessage = "";
  showAlert = false;

  constructor() { }
  ngOnInit(): void {
  }

  toggleAlert() {
    if (this.showAlert === false)
      this.showAlert = true;
    else
      this.showAlert = false;
  }

}
