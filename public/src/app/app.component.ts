import { Component,  OnInit, trigger, enableProdMode} from '@angular/core';
import { WindowRef} from './windowRef'
import { IntroService } from './intro/intro.service'

enableProdMode();

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
