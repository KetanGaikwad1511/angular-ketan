import { Component, OnInit } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

 observable = new Observable((observer)=>{
  observer.next('first item');
  observer.next('second item');
  observer.next('third item');
  observer.complete();
});

dataForChild:any=1002;

  ngOnInit(): void {
   

    this.observable.subscribe(res=>
      {
        console.log(res)
      });

this.calculateNumbers()
    
  }
  name = 'Angular';

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
