import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],


})
export class SidebarComponent implements OnInit {
  name:string = ""
  email:string = ""
  phone:string = ""
  message:string = ""
  constructor() { }

  ngOnInit() {
  }

}
