import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  constructor() {}

  simplePromise = new Promise((resolve, reject) => {
   setTimeout(()=>{
    resolve('resolved');
   },2000) 
  });

  ngOnInit() {
    console.log('promise stated');
    this.simplePromise.then((res) => console.log(res));
  }
}
