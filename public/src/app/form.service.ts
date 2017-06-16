import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from "@angular/http"
import { MainContentComponent } from './main-content/main-content.component'
import 'rxjs'
@Injectable()
export class FormService {


  constructor(private http: Http) { }
  sendEmail(data){
      return this.http.post("/contactForm", data.form.value)
      .map(data => data.json()).toPromise()
    }
}
