import { Component,  OnInit, trigger, state, style, transition, animate, HostListener } from '@angular/core';
import { IntroService } from '../intro/intro.service'
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  animations: [
    trigger('menuModal', [
     state('inactive', style({
       transform: "translateY(100%)",
       display: "none",
     })),
     state('active', style({
       display : "flex",
     })),
     transition('inactive => active', animate('1000ms ease-in-out')),
     transition('active => inactive', animate('100ms ease-in-out')),
   ]),
   trigger('formModal', [
    state('inactive', style({
      transform: "translateY(100%)",
      display: "none",
    })),
    state('active', style({
      display : "flex",
    })),
    transition('inactive => active', animate('1000ms ease-in-out')),
    transition('active => inactive', animate('100ms ease-in-out')),
  ]),
   trigger('triangleLeft', [
    state('inactive', style({
      borderRight: "35vw solid transparent",
      borderBottom: "0vw solid #f2f2f2",
      borderLeft: "20vw solid transparent"
    })),
    state('active', style({
      borderRight: "35vw solid transparent",
      borderBottom: "10vw solid #f2f2f2",
      borderLeft: "20vw solid transparent"
    })),
    transition('inactive => active', animate('1000ms ease-in-out')),
    transition('active => inactive', animate('100ms ease-in-out')),
  ]),
  trigger('triangleRight', [
   state('inactive', style({
     borderRight: "16vw solid transparent",
     borderBottom: "0vw solid #f2f2f2",
     borderLeft: "27vw solid transparent"
   })),
   state('active', style({
     borderRight: "16vw solid transparent",
     borderBottom: "8vw solid #f2f2f2",
     borderLeft: "27vw solid transparent"
   })),
   transition('inactive => active', animate('1000ms 400ms ease-in-out')),
   transition('active => inactive', animate('100ms ease-in-out')),
  ]),
  trigger('menu', [
   state('inactive', style({

   })),
   state('active', style({
     transform: "translateY(100%)",
     position: "fixed",
     top: "0",
     zIndex: "500"
   })),
   transition('inactive => active', animate('1000ms ease-in-out')),
   transition('active => inactive', animate('100ms ease-in-out')),
  ]),
  ]
})
export class MainContentComponent implements OnInit {
  menuState = 'inactive';
  triState = 'inactive';
  formState = "inactive";
  stickyState = "inactive";
  menu: any;

  constructor(private introService: IntroService) { }

  ngOnInit() {
    this.menu = document.getElementsByClassName('menu');
    console.log(this.menu)
  }

  @HostListener('window:scroll', ['$event'])
  track(event) {

    let scrollHeight = event.path[1].scrollY;
    if (scrollHeight > this.menu[0].offsetHeight){
      this.stickyState = 'active';
    }
    else {
      this.stickyState = 'inactive';
    }
    console.debug("Scroll Event", event.path[1].scrollY);
  }


  toggleMenu(){
    this.menuState = this.menuState == "inactive" ? "active" : "inactive";
  }

  toggleForm(){
    this.formState = this.formState == "inactive" ? "active" : "inactive";
    console.log(this.formState)
  }

  toggleTriangle(){
    this.triState =  "active";
  }

  replayIntro(){
    location.reload()
  }


}
