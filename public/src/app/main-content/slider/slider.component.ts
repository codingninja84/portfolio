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
 ]
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (navigator.userAgent.indexOf("Firefox") != -1) {
      let column = document.getElementsByClassName("column");
      for (let i = 0; i < column.length; i++) {
          column[i].classList.add("column-ff");
      }
      }
    }

  }
