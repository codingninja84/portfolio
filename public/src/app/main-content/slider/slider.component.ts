import { Component,  OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('slideInOut', [
     state('active', style({
       width : "100%",
       height: "100%",
       scale: (1.5)
     })),
     state('inactive', style({
       width: "20%",
       background: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/slide1.jpg')",
       backgroundSize: "cover",
       backgroundPosition: "center",
       backgroundrepeat: "no-repeat"
     })),
     transition('inactive => active', animate('1000ms 400ms ease-in-out')),
     transition('active => inactive', animate('400ms ease-in-out'))
   ]),
   //sliderContent
   trigger('contentDiv', [
     state('active', style({
       width : "70%",
       scale: "(1.5)"
     })),
     state('inactive', style({
       opacity: "0",
       width: "20%"
     })),
     transition('inactive => active', animate('1000ms 400ms ease-in-out')),
     transition('active => inactive', animate('400ms ease-in-out'))
   ]),

   //sardaContent
   trigger('sarda', [
     state('active', style({
       width : "70%",
       height: "100%",
       padding : "0"
     })),
     state('inactive', style({
       padding: "0",
       width: "20%",

     })),
     transition('inactive => active', animate('1000ms 400ms ease-in-out')),
     transition('active => inactive', animate('400ms ease-in-out'))
   ]),
   trigger('sardaDiv', [
     state('active', style({
       width : "100%",
       height: "100%",
       margin: "0"
     })),
     state('inactive', style({
       width : "100%",
       height: "100%",
       filter: "blur(8px)"
     })),
     transition('inactive => active', animate('1000ms 400ms ease-in-out')),
     transition('active => inactive', animate('400ms ease-in-out'))
   ]),
   trigger('dojo', [
     state('active', style({
       width : "70%",
       height: "100%",
       padding : "0"
     })),
     state('inactive', style({
       padding: "0",
       width: "20%",

     })),
     transition('inactive => active', animate('1000ms 400ms ease-in-out')),
     transition('active => inactive', animate('400ms ease-in-out'))
   ]),
   trigger('dojoDiv', [
     state('active', style({
       width : "100%",
       height: "100%",
       margin: "0"
     })),
     state('inactive', style({
       width : "100%",
       height: "100%",
       filter: "blur(8px)"
     })),
     transition('inactive => active', animate('1000ms 400ms ease-in-out')),
     transition('active => inactive', animate('400ms ease-in-out'))
   ]),
   //previewText
   trigger('previewTextSlide1', [
     state('active', style({
       transform: "translateY(10vh)",
       opacity: ".5"
     })),
     state('inactive', style({
       opacity: "1",
     })),
     transition('inactive => active', animate('600ms ease-in-out')),
     transition('active => inactive', animate('400ms 600ms ease-in-out'))
   ]),
   //previewText
   trigger('previewTextSlide2', [
     state('active', style({
       transform: "translateY(20vh)",
       opacity: ".5",
     })),
     state('inactive', style({
       opacity: "1",
     })),
     transition('inactive => active', animate('600ms ease-in-out')),
     transition('active => inactive', animate('400ms 600ms ease-in-out'))
   ]),
   trigger('previewTextSlide3', [
     state('active', style({
       transform: "translateY(12vh)",
       opacity: ".5",
     })),
     state('inactive', style({
       opacity: "1",
     })),
     transition('inactive => active', animate('600ms ease-in-out')),
     transition('active => inactive', animate('400ms 600ms ease-in-out'))
   ]),
 ]
})
export class SliderComponent implements OnInit {

  constructor() { }

  sliderState:string = 'inactive';
  sardaState:string = "inactive";
  dojoState:string = 'inactive';
  toggleMenu() {
   // 1-line if statement that toggles the value:
   this.sliderState = this.sliderState === 'inactive' ? 'active' : 'inactive';

  }
  toggleSarda(){
    this.sardaState = this.sardaState === 'inactive' ? 'active' : 'inactive';
  }

  toggleDojo(){
    this.dojoState = this.dojoState === 'inactive' ? 'active' : 'inactive';
  }

  ngOnInit() {

    }

  }
