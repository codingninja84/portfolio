import { Component,  OnInit, trigger, state, style, transition, animate, HostListener, keyframes } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],

})
export class LanguagesComponent implements OnInit {
  lang: string = "";
  description: string[] = [];
  counter: number = 0;
  active: any;
  boxes: any;
  slideTimeout: any;
  languageArray = ["JavaScript","TypeScript","Swift","Python"];
  language: any = {
    "JavaScript":  ["ExpressJS", "NodeJS", "Sockets", "Bower", "NPM" ],
    "TypeScript":  ["Angular2", "Backbone", "React"],
    "Swift":  ["Xcode", "Foundation", "Core-Motion", "Core-Data", "Auto-Layout"],
    "Python":  ["Django", "Flask", "Virtualenv", "Pip"]
  }
  constructor() { }

  ngOnInit() {

    this.boxes = document.getElementsByClassName('box');
    console.log(this.boxes)
    setTimeout(()=>{this.slider()},2000);
  }



  slider(){
    this.lang = this.languageArray[this.counter];
    this.description = this.language[this.languageArray[this.counter]];
    this.setActive(null);
    if(this.counter < this.languageArray.length - 1) {
      this.removeActive();
      this.counter++;
      this.setActive(null);
      this.lang = this.languageArray[this.counter];
      this.description = this.language[this.languageArray[this.counter]];
    } else {
      this.removeActive();
      this.counter = 0;
      this.setActive(null);
      this.lang = this.languageArray[this.counter];
      this.description = this.language[this.languageArray[this.counter]];
    }
    this.slideTimeout = setTimeout(()=>{this.slider()},4000);
    }

    setActive(element){
      if(element == null){
        this.boxes[this.counter].classList.add('active');
      } else {
        clearTimeout(this.slideTimeout);
        this.removeActive()
        this.active = element;
        let idx = this.languageArray.indexOf(element);
        if(idx == 0){
          this.counter = 0;
          this.lang = this.languageArray[idx];
          this.description = this.language[this.languageArray[idx]];
          this.boxes[idx].classList.add('active');
        } else {
          this.counter = idx;
          this.lang = this.languageArray[idx];
          this.description = this.language[this.languageArray[idx]];
          this.boxes[idx].classList.add('active')
        }
      }
    }

    removeActive(){
        let list = this.boxes[this.counter].classList;
        if (list.length > 1){
          this.boxes[this.counter].classList.remove('active');
          return true;
        }
        return false;
    }

}
