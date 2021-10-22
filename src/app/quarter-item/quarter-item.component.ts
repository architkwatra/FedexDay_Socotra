import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quarter-item',
  templateUrl: './quarter-item.component.html',
  styleUrls: ['./quarter-item.component.scss']
})
export class QuarterItemComponent implements OnInit {


  @Input() data: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  getId(prefix: string, i: number) {
    return prefix + i.toString();
  }
}
