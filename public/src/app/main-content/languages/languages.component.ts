import { Component,  OnInit, trigger, state, style, transition, animate, HostListener, keyframes } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],
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
export class LanguagesComponent implements OnInit {
  position = "start";
  lang: string = "";
  description: string[] = [];
  counter: number = 0;
  active: any;
  boxes: any;
  slideTimeout: any;
  languageArray = ["JavaScript","TypeScript","Swift","Python"];
  language: any = {
    "JavaScript":  ["NPM", "ExpressJS", "NodeJS", "Sockets", "Bower"],
    "TypeScript":  ["Angular2", "React", "BackboneJS"],
    "Swift":  ["Xcode", "Auto-Layout", "Foundation", "Core-Motion", "Core-Data"],
    "Python":  ["Django", "Flask", "Pip", "Virtualenv"]
  }
  constructor() { }

  ngOnInit() {
    this.moveIcons()
    this.boxes = document.getElementsByClassName('box');
    console.log(this.boxes)
    setTimeout(()=>{this.slider()},2000);
  }

  moveIcons(){
    this.position = this.position == "start" ? "void" : "start";
    setTimeout(()=>{this.moveIcons()},3000);
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
