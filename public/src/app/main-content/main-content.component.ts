import { Component,  OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  animations: [
    trigger('modal', [
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
  ]
})
export class MainContentComponent implements OnInit {
  menuState = 'inactive';
  frameworks: object = {
    javascript : ["Angular 2", "React", "Node", "Express", "MongoDB", "Mongoose", "Chai" ],
    python : ["Django", "Flask", "MySQL Workbench", "SQLite", "PIP" ],
    swift : ["xCode", "Obj-c", "Auto Layout", "Core Motion", "Core Data", "Foundation", "Key Chain" ],
  }

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuState = this.menuState == "inactive" ? "active" : "inactive";
  }

}
