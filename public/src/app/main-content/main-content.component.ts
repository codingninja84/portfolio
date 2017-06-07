import { Component,  OnInit, trigger, state, style, transition, animate, HostListener, keyframes } from '@angular/core';
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
  trigger('contactModal', [
    state('inactive', style({
      transform: "translateX(-100%)",
      display: "none",
    })),
    state('active', style({
      display : "flex",
    })),
    transition('inactive => active', animate('400ms ease-in-out')),
    transition('active => inactive', animate('100ms ease-in-out')),
   ]),
   trigger('contact', [
     state('inactive', style({
       transform: "translateX(0)",
     })),
     state('active', style({
      //  transform: "translateX(-500%)"
      zIndex: "9500",
      position: "fixed",
      left: "10vw",
      top: "5vh",
      height: "10vw",
      width: "10vw",
      clipPath: "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)"
     })),
     transition('inactive => active', [
      animate(500, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ])),
     transition('active => inactive', animate('1000ms ease-in-out')),
    ]),
  ]),
  trigger('playSubmit', [
    state('void', style({
      transform: "translatex(100%)",
      opacity: "0"
    })),
    transition('active => void', animate('1000ms ease-in-out')),
   ]),
   trigger('thumbUp', [
     state('inactive', style({
       display: "none",
       opacity: "0"
     })),
     state('active', style({
       display: "flex"
     })),
     transition('inactive <=> active', [
      animate(300, keyframes([
        style({opacity: 1, transform: 'scale(.75)', offset: 0.7}),
        style({opacity: 1, transform: 'scale(1.2)',  offset: 1.0})
      ])),
    ])
  ])
]
})
export class MainContentComponent implements OnInit {
  menuState = 'inactive';
  triState = 'inactive';
  formState = 'inactive';
  stickyState = 'inactive';
  contactState = 'inactive';
  thumbState = "inactive";
  contact = 'Contact';
  submit = 'active';
  menu: any;

  //form inputs
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;

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


  clearForm(){
    this.firstName = "";
    this.lastName = "";
    this.phone = "";
    this.email = "";
    this.message = "";
  }

  //menu & form toggles

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

  toggleSidebar(){
    this.contactState = this.contactState == "inactive" ? "active" : "inactive";
    this.contact = this.contact == "Contact" ? "Close" : "Contact";
  }

  toggleSubmit(){
    this.submit = "void";
    setTimeout(()=>{
      this.thumbState = "active";
      setTimeout(()=>{this.toggleForm()},3000);
  },1000)
  }
}
