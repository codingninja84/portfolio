import { Component,  OnInit, trigger, state, style, transition, animate, HostListener, keyframes } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],

})
export class LanguagesComponent implements OnInit {
  lang: string = "";
  aboutLang: string = "";
  description: string[] = [];
  counter: number = 0;
  active: any;
  boxes: any;
  slideTimeout: any;
  languageArray = ["JavaScript","TypeScript","Swift","Python"];
  language: any = {
    "JavaScript":  { frameworks: ["ExpressJS", "NodeJS", "Jquery", "Sockets", "Bower", "NPM" ], about: "Whether using MongoDB for data storage, Node.js for the web backend, jQuery/Angular/React/Ember.js for the frontend, undeniably, Javascript is Ubiqutous. This means that mastery of JavaScript lets you start small and build fun things, but can take you all the way. No other programming language today can claim that."},
    "TypeScript":  { frameworks: ["Angular2", "Backbone", "React"],  about: "This is JavaScript without a lot of the looseness of JS. It uses ES6 type syntax, then transpiles into Javascript and it's super fun to write in! This portfolio is actually built using Angular2, and some of the best web apps I have built are created using TypeScript"},
    "Swift":  { frameworks: ["Xcode", "Foundation", "Core-Motion", "Core-Data", "Auto-Layout"], about: "Objective-C, without the C. These were Apple's own words when they unveiled this Static Language and it's a blast to write in! X-code compiles as you type and the storyboard makes build Auto-Layouts a breeze! Mobile app development has never been so easy!"},
    "Python":  { frameworks:  ["Django", "Flask", "Virtualenv", "Pip"],about: "Python is a general-purpose language, it can be used to build just about anything. I use Python because it is great for backend web development, data analysis, artificial intelligence, and scientific computing. There are plenty of resources to help learn how to do those as well."},
  }
  constructor() { }

  ngOnInit() {

    this.boxes = document.getElementsByClassName('box');
    console.log(this.boxes)
    setTimeout(()=>{this.slider()},2000);
  }



  slider(){
    this.lang = this.languageArray[this.counter];
    this.description = this.language[this.languageArray[this.counter]].frameworks;
    this.aboutLang = this.language[this.languageArray[this.counter]].about
    this.setActive(null);
    if(this.counter < this.languageArray.length - 1) {
      this.removeActive();
      this.counter++;
      this.setActive(null);
      this.lang = this.languageArray[this.counter];
      this.description = this.language[this.languageArray[this.counter]].frameworks;
      this.aboutLang = this.language[this.languageArray[this.counter]].about
    } else {
      this.removeActive();
      this.counter = 0;
      this.setActive(null);
      this.lang = this.languageArray[this.counter];
      this.description = this.language[this.languageArray[this.counter]].frameworks;
      this.aboutLang = this.language[this.languageArray[this.counter]].about;
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
          this.description = this.language[this.languageArray[idx]].frameworks;
          this.aboutLang = this.language[this.languageArray[idx]].about
          this.boxes[idx].classList.add('active');
        } else {
          this.counter = idx;
          this.lang = this.languageArray[idx];
          this.description = this.language[this.languageArray[idx]].frameworks;
          this.aboutLang = this.language[this.languageArray[idx]].about
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
