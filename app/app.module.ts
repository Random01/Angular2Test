import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MyPlayground } from './app.playground'; 

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
  declarations: [ AppComponent, MyPlayground ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }