import { Component,  OnInit, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { WindowRef} from './windowRef'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('introToggle', [
     state('inactive', style({
     })),
     state('void', style({
       display: "none"
     })),
     transition('* => void', [
       animate('1s ease'),
       group([
         animate('1s ease', style({ transform: 'translateX(50px)', opacity: "0" })),
       ]),
       ]),
       ]),
   trigger('intro', [
     state('high', style({
       boxShadow: ".3rem .2rem .7rem rgba(0, 0, 255, .5)"
     })),
     state('low', style({
       boxShadow: "-.2rem .3 .7rem rgba(0, 255, 0, .5)"
     })),
     state('left', style({
       boxShadow: ".3 -.2rem .7rem rgba(0, 255, 0 .5)"
     })),
     state('right', style({
       boxShadow: "0 .3rem .7rem rgba(255, 255, 255, .5)"
     })),
     transition('high => low', animate('250ms ease-in-out')),
     transition('low => high', animate('250ms ease-in-out')),
     transition('left => right', animate('250ms ease-in-out')),
     transition('right => left', animate('250ms ease-in-out')),
   ]),
trigger('background', [
 state('inactive', style({
   display: "none",
   opacity: "0"
 })),
 state('active', style({
   display: "flex",
   zIndex: "9999",
   opacity: "1"
 })),
 transition('* => active', animate('1000ms')),
 transition('active => inactive', animate('1000ms'))
]),
trigger('color', [
 state('inactive', style({
   display: "none",
 })),
 transition('* => inactive', animate('0'))
]),
trigger('breakTop', [
  state('inactive', style({
    transform: "translateX(0)",
  })),
  state('void', style({
    transform: "translateX(-110%)"
  })),
 transition('* => void', animate('3000ms ease-out'))
  ]),
trigger('breakBottom', [
  state('inactive', style({
    transform: "translateX(0)",
  })),
  state('void', style({
    transform: "translateX(110%)"
  })),
 transition('* => void', animate('3000ms ease-out'))
]),
trigger('smallBars', [
 state('shrink', style({
   transform: "translateY(-1vh)"
 })),
 state('grow', style({
   transform: "translateY(1vh)"
 })),
 transition('shrink => grow', animate('1000ms')),
 transition('grow => shrink', animate('1000ms'))
]),
trigger('largeBars', [
 state('shrink', style({
   transform: "translateY(1vh)"
 })),
 state('grow', style({
   transform: "translateY(-1vh)"
 })),
 transition('shrink => grow', animate('1000ms')),
 transition('grow => shrink', animate('1000ms'))
]),
 ]
})
export class AppComponent {
  skills: any = ["skills: true","Angular", "React", "Javascript", "TypeScript", "Swift", "MongoDB", "Python", "Node", "Express", "Django", "AWS", "Ubuntu", "Flask", "iOS", "CSS3", "HTML5", "Flex-Box", "SQL", "Foundation", "Core Motion", "Less", true]
  enterState = "inactive";
  logoState = "inactive";
  breakState = "active";
  break = "inactive";
  backgroundState = "inactive";
  colorStateLeft = "high";
  colorStateRight = "left";
  barState = 'shrink'
  skillSpeed = 2000;
  counter = 0;
  skill = "";
  build: any;
  bass: any;

  constructor(private winRef: WindowRef ) { }

  ngOnInit(){
    this.build = this.winRef.document.getElementById("build")
    this.bass = this.winRef.document.getElementById("bass")
    let interval = setInterval(()=>{
      let output = this.dance()
      if (output == false){
        clearInterval(interval)
      }
    },1000)

  }

  count(num){
    return num++;
  }

  toggleEnter() {
    this.enterState = "void"
    this.colorStateLeft = "stop"
    setTimeout(()=>{this.go()},1500)
  }

  go(){
    if (this.counter < this.skills.length){
      this.build.play();
      this.backGround()
      this.skill = this.skills[this.counter];
      this.counter++
      if (this.counter == this.skills.length -1){
        this.bass.play();
      }
      setTimeout(()=>{this.go()},this.skillSpeed)
      this.skillSpeed = this.skillSpeed * .8;
    }
    else {
      this.build.pause();
        this.bartoggle()
        setInterval(()=>{this.bartoggle()}, 1000)
        setTimeout(()=>{this.fadeLogo(); this.bass.pause()}, 5000)
    }
  }

  bartoggle(){
    this.barState = this.barState == 'grow' ? 'shrink' : 'grow';
  }

  dance(){
    if (this.colorStateLeft !== "stop"){
        this.colorStateLeft = this.colorStateLeft == "high" ? 'low' : "high";
        this.colorStateRight = this.colorStateRight == "left" ? 'right' : "left";
    } else {
      return false;
    }
  }

  backGround(){
    this.backgroundState = 'active';
  }


  fadeLogo(){
    this.backgroundState= "inactive";
    setTimeout(()=>{this.switchBackground()}, 1000)
  }

  switchBackground(){
    this.breakState = "inactive";
    this.break = "void";

  }
}
