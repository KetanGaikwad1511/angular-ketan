import { Component, OnInit } from '@angular/core';
import { GetService } from './get.service';

@Component({
  selector: 'app-http-observable',
  templateUrl: './http-observable.component.html',
  styleUrls: ['./http-observable.component.css']
})
export class HttpObservableComponent implements OnInit {

  constructor(private service : GetService) { }
data=[];
  ngOnInit() {

    this.service.getData().subscribe(res=>{
     this.data=res;
    });
  }

}