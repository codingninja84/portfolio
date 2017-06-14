import { Component,  OnInit, trigger, state, style, transition, animate, HostListener, keyframes} from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css'],
  animations: [
    trigger("group1", [
      state('void', style({
       transform: 'translateX(0)',
       animationFillMode: "forwards"
      })),
      transition('start => void', [
        animate(7000, keyframes([
          style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
          style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
          style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
          style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
          style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
          style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
        ]))
      ]),
      transition('void => start', [
   animate(7000, keyframes([
     style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
     style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
     style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
     style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
     style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
     style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
     ]))
   ]),
   state('start', style({
    transform: 'translateX(0)',
    animationFillMode: "forwards"
   })),
   transition('void => start', [
     animate(7000, keyframes([
       style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
       style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
       style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
       style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
       style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
       style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
     ]))
   ]),
   transition('start => void', [
 animate(7000, keyframes([
   style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
   style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
   style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
   style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
   style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
   style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
  ]))
 ]),
 ]),
   trigger("group2", [
     state('void', style({
      transform: 'translateX(0)',
      animationFillMode: "forwards"
     })),
     transition('void => start', [
       animate(11000, keyframes([
         style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
         style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
         style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
         style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
         style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
         style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
       ]))
     ]),
     transition('start => void', [
  animate(11000, keyframes([
    style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
    style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
    style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
    style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
    style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
    style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
    ]))
  ]),
  state('start', style({
   transform: 'translateX(0)',
   animationFillMode: "forwards"
  })),
  transition('start => void', [
    animate(11000, keyframes([
      style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
      style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
      style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
      style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
      style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
      style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
    ]))
  ]),
  transition('void => start', [
animate(11000, keyframes([
  style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
  style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
  style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
  style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
  style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
  style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
 ]))
]),
]),
trigger("group3", [
  state('void', style({
   transform: 'translateX(0)',
   animationFillMode: "forwards"
  })),
  transition('start => void', [
    animate(9000, keyframes([
      style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
      style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
      style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
      style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
      style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
      style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
    ]))
  ]),
  transition('void => start', [
animate(9000, keyframes([
 style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
 style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
 style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
 style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
 style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
 style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
 ]))
]),
state('start', style({
transform: 'translateX(0)',
animationFillMode: "forwards"
})),
transition('void => start', [
 animate(9000, keyframes([
   style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
   style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
   style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
   style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
   style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
   style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
 ]))
]),
transition('start => void', [
animate(9000, keyframes([
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
]))
]),
]),
trigger("group4", [
  state('void', style({
   transform: 'translateX(0)',
   animationFillMode: "forwards"
  })),
  transition('void => start', [
    animate(12500, keyframes([
      style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
      style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
      style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
      style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
      style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
      style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
    ]))
  ]),
  transition('start => void', [
animate(12500, keyframes([
 style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
 style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
 style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
 style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
 style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
 style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
 ]))
]),
state('start', style({
transform: 'translateX(0)',
animationFillMode: "forwards"
})),
transition('start => void', [
 animate(12500, keyframes([
   style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
   style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
   style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
   style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
   style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
   style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
 ]))
]),
transition('void => start', [
animate(12500, keyframes([
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
]))
]),
]),
trigger("group5", [
  state('void', style({
   transform: 'translateX(0)',
   animationFillMode: "forwards"
  })),
  transition('start => void', [
    animate(9500, keyframes([
      style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
      style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
      style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
      style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
      style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
      style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
    ]))
  ]),
  transition('void => start', [
animate(9500, keyframes([
 style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
 style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
 style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
 style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
 style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
 style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
 ]))
]),
state('start', style({
transform: 'translateX(0)',
animationFillMode: "forwards"
})),
transition('void => start', [
 animate(9500, keyframes([
   style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
   style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
   style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
   style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
   style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
   style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
 ]))
]),
transition('start => void', [
animate(9500, keyframes([
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
]))
]),
]),
trigger("group6", [
 state('void', style({
  transform: 'translateX(0)',
  animationFillMode: "forwards"
 })),
 transition('void => start', [
   animate(7400, keyframes([
     style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
     style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
     style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
     style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
     style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
     style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
   ]))
 ]),
 transition('start => void', [
animate(7400, keyframes([
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
]))
]),
state('start', style({
transform: 'translateX(0)',
animationFillMode: "forwards"
})),
transition('start => void', [
animate(7400, keyframes([
  style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
  style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
  style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
  style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
  style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
  style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
]))
]),
transition('void => start', [
animate(7400, keyframes([
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
]))
]),
]),
trigger("group7", [
state('void', style({
transform: 'translateX(0)',
animationFillMode: "forwards"
})),
transition('start => void', [
animate(10000, keyframes([
  style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
  style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
  style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
  style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
  style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
  style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
]))
]),
transition('void => start', [
animate(10000, keyframes([
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
]))
]),
state('start', style({
transform: 'translateX(0)',
animationFillMode: "forwards"
})),
transition('void => start', [
animate(10000, keyframes([
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
]))
]),
transition('start => void', [
animate(10000, keyframes([
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
]))
]),
]),
trigger("group8", [
state('void', style({
transform: 'translateX(0)',
animationFillMode: "forwards"
})),
transition('void => start', [
animate(9800, keyframes([
  style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
  style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
  style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
  style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
  style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
  style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
]))
]),
transition('start => void', [
animate(9800, keyframes([
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
]))
]),
state('start', style({
transform: 'translateX(0)',
animationFillMode: "forwards"
})),
transition('start => void', [
animate(9800, keyframes([
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
]))
]),
transition('void => start', [
animate(9800, keyframes([
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 0.2}),
style({opacity: 1, transform: 'translateY('+Math.floor(Math.random() * 300)+'%)',  offset: 0.4}),
style({opacity: 1, transform: 'translateX(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.6}),
style({opacity: 1, transform: 'translateY(-'+Math.floor(Math.random() * 300)+'%)', offset: 0.8}),
style({opacity: 1, transform: 'translateX('+Math.floor(Math.random() * 300)+'%)',  offset: 1.0})
]))
]),
]),

]
})
export class IconsComponent implements OnInit {
  position = "start";
  constructor() { }

  ngOnInit() {
    this.moveIcons()
  }

  moveIcons(){
    this.position = this.position == "start" ? "void" : "start";
    console.log("test")
    setTimeout(()=>{this.moveIcons()},6500);
  }

}
