import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  frameworks: object = {
    javascript : ["Angular 2", "React", "Node", "Express", "MongoDB", "Mongoose", "Chai" ],
    python : ["Django", "Flask", "MySQL Workbench", "SQLite", "PIP" ],
    swift : ["xCode", "Obj-c", "Auto Layout", "Core Motion", "Core Data", "Foundation", "Key Chain" ],
  }
  constructor() { }

  ngOnInit() {
  }

}
