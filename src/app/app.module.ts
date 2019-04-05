import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RoutingModule } from './app.routes';

//Componentes para primefaces
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [  
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
