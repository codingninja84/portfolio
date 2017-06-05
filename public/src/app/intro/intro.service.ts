import { Injectable } from '@angular/core';

@Injectable()
export class IntroService {
  load: boolean = false;
  constructor() { }
  breakState(){
    this.load = true;
  }
}
