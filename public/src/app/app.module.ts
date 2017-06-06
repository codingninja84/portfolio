import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SliderComponent } from './main-content/slider/slider.component';
import { EditorComponent } from './main-content/editor/editor.component';
import { WindowRef } from './windowRef';
import { IntroComponent } from './intro/intro.component';
import { LanguagesComponent } from './main-content/languages/languages.component'
import { IntroService } from './intro/intro.service';
import { FooterComponent } from './main-content/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    SliderComponent,
    EditorComponent,
    IntroComponent,
    LanguagesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [WindowRef, IntroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
