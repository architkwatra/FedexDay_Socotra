import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  data = ['1.png','2.png','3.png','4.png','5.png','6.png','7.JPG','8.jpg','11.jpg','10.jpg','9.jpg','12.jpg', '13.jpg', '14.jpg', '15.jpg'];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.data.length; ++i) {
      const rndInt = Math.floor(Math.random() * (this.data.length - i + 1));
      let temp = this.data[i];
      this.data[i] = this.data[rndInt];
      this.data[rndInt] = temp;
    }
  }
}
