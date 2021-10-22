import {Component, ElementRef, OnInit} from '@angular/core';
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
  slides = [
    {img: "assets/images/1.png"},
    {img: "assets/images/8.jpg"},
    {img: "assets/images/13.jpg"},
    {img: "assets/images/12.jpg"},
    {img: "assets/images/10.jpg"},
    {img: "assets/images/9.jpg"},
    {img: "assets/images/7.JPG"}
  ];
  slideConfig = {"slidesToShow": 2, "slidesToScroll": 1, autoplay: true, autoplaySpeed: 600,};

  constructor(public globalService: GlobalService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.iniSlickJs();
  }

  private iniSlickJs() {
    const htmlScriptElement = document.createElement('script');
    htmlScriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js';
    this.elementRef.nativeElement.appendChild(htmlScriptElement);
  }

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e:any) {
    console.log('slick initialized');
  }

  breakpoint(e:any) {
    console.log('breakpoint');
  }

  afterChange(e:any) {
    console.log('afterChange');
  }

  beforeChange(e:any) {
    console.log('beforeChange');
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
