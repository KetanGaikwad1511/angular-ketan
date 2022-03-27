import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit {

  constructor() { }

  observable = new Observable((observer)=>{
    observer.next('first item');
    observer.next('second item');
    observer.next('third item');
    observer.complete();
  });

  ngOnInit() {

    this.observable.subscribe(res=>
      {
        console.log(res)
      });

this.calculateNumbers()
    
  }
  
  getNumbers(): Observable<number> {
    return of(1, 2, 3, 4, 5, 6, 7);
  } 
  calculateNumbers() {
    this.getNumbers()
      .pipe(
        filter((n) => n % 2 === 1),
        map((n) => n + 10)
      )
      .subscribe((result) => console.log(result));
  }

}