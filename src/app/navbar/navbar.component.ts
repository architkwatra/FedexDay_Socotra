import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  highlight: any;

  constructor() { }

  ngOnInit(): void {
    this.highlight = {'home': true, 'submissions': false, 'teams': false, 'timeline': false, 'gallery': false}
  }

  select(cur: string) {
    this.highlight = {'home': false, 'submissions': false, 'teams': false, 'timeline': false, 'gallery': false};
    this.highlight[cur] = true;
  }
}
