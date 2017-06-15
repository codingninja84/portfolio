import { Component,  OnInit, trigger, state, style, transition, animate, keyframes, group, Input, ViewChild, ElementRef } from '@angular/core';
import { WindowRef} from './../windowRef'
import { IntroService} from './intro.service'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
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
       boxShadow: ".5rem 0 .7rem rgba(0, 255, 255, .5)"
     })),
     state('low', style({
       boxShadow: ".2rem .3rem .7rem rgba(0, 255, 0, .5)",
     })),
     state('top', style({
       boxShadow: "-.3rem -.5rem .8rem rgba(0, 0, 255, .5)",
     })),
     state('bottom', style({
       boxShadow: "-.2rem .5rem 1rem rgba(0, 255, 255, .5)",
     })),
     transition('high => low', group([
       animate("1s"),
       animate('.5s ease-in-out', style({boxShadow: ".2rem .3 .7rem rgba(0, 255, 0, .5)"}),),
      //  animate('.5s ease-in-out', style({boxShadow: ".2rem .3 .7rem rgba(255, 0, 0, .5)"}),)
   ])),
      transition('low => high', group([
        animate('.5s ease-in-out', style({boxShadow: ".2rem .3 .7rem rgba(0, 255, 0, .5)"}),),
        // animate('.5s ease-in-out', style({boxShadow: ".2rem .3 .7rem rgba(255, 0, 0, .5)"}),)
    ])),
     transition('top => bottom',  group([
      //  animate('.5s ease-in-out', style({boxShadow: "-.2rem .3 .7rem rgba(0, 255, 0, .5)"}),),
       animate('.5s ease-in-out', style({boxShadow: "-.2rem -.3 .7rem rgba(255, 0, 0, .5)"}),)
   ])),
     transition('bottom => top',  group([
       animate('.5s ease-in-out', style({boxShadow: "-.2rem -.3 .7rem rgba(255, 255, 0, .5)"}),),
      //  animate('.25s ease-in-out', style({boxShadow: ".2rem .3 .7rem rgba(255, 0, 0, .5)"}),)
   ])),
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
 transition('* => inactive', animate('0s'))
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
export class IntroComponent implements OnInit {
  skills: any = ["skills: true","Angular", "React", "JavaScript", "TypeScript", "Swift", "Python", "MongoDB", "Node", "Express", "Django", "AWS", "Ubuntu", "Flask", "iOS", "CSS3", "HTML5", "Flex-Box", "SQL", "Foundation", "Core Motion", "Less", true]
  skillSpeed = 2000;
  counter = 0;
  skill = "";
  enterState = "inactive";
  logoState = "inactive";
  breakState = "active";
  introState = "true";
  break = "inactive";
  backgroundState = "inactive";
  colorStateLeft = "high";
  colorStateRight = "top";
  barState = 'shrink'
  ambient: any;
  build: any;
  bass: any;
  welcome: any;

  constructor(private winRef: WindowRef, private introService: IntroService ) { }
  @ViewChild('enterDiv') enterDiv: ElementRef
  ngOnInit(){
    this.build = this.winRef.document.getElementById("build");
    this.bass = this.winRef.document.getElementById("bass");
    this.ambient = this.winRef.document.getElementById("ambient");
    this.welcome = this.winRef.document.getElementById("welcome");
  }

  ngAfterViewInit() {
    console.log("Welcome! I'm still working out some issues with Safari, but take a look and if you like what you see shoot met an email @ rhanna1461@hotmail.com, or call me @ 253-777-8162")
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
    this.ambient.play();
    this.enterState = "void";
    this.colorStateLeft = "stop";
    setTimeout(()=>{this.go()},1500);
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
        setTimeout(()=>{this.colorStateRight = this.colorStateRight == "top" ? 'bottom' : "top";}, 500)
    } else {
      return false;
    }
  }

  backGround(){
    this.backgroundState = 'active';
  }


  fadeLogo(){
    this.backgroundState= "inactive";
    this.introService.breakState();
    setTimeout(()=>{this.switchBackground()}, 1000)
  }

  switchBackground(){
    this.breakState = "inactive";
    this.break = "void";
    this.ambient.play();
    setTimeout(()=>{
      this.welcome.play();
      setTimeout(()=>{this.introState = 'false'}, 2000)
    },2000)
  }

}
