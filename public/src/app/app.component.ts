import { Component,  OnInit, trigger} from '@angular/core';
import { WindowRef} from './windowRef'
import { IntroService } from './intro/intro.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  constructor(private winRef: WindowRef, private intro: IntroService ) { }
  ngOnInit(){

      }


}
