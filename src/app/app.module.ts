import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ObserverComponent } from './observer/observer.component';
import { HttpObservableComponent } from './http-observable/http-observable.component';
import { GetService } from './http-observable/get.service';

import { HttpClientModule } from '@angular/common/http';
import { PromiseComponent } from './promise/promise.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent,ObserverComponent,HttpObservableComponent ,PromiseComponent],
  bootstrap:    [ AppComponent ],
  providers:[GetService]
})
export class AppModule { }
