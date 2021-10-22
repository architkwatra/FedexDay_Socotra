import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-teams-info',
  templateUrl: './teams-info.component.html',
  styleUrls: ['./teams-info.component.scss']
})
export class TeamsInfoComponent implements OnInit {

  @Input() data: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

  getId(prefix: string, i: number) {
    return prefix + i.toString();
  }

  openAccordian() {

  }

}
