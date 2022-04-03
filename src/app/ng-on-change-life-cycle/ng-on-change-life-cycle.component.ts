import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-change-life-cycle',
  templateUrl: './ng-on-change-life-cycle.component.html',
  styleUrls: ['./ng-on-change-life-cycle.component.css'],
})
export class NgOnChangeLifeCycleComponent implements OnInit {
  constructor() {}

  @Input() data:any;

  ngOnInit() {}

  //this is child componnet that recieves data from the parent component and
  //will get fired in ngOnChange Hook life cycle..
  //ngOnChange life cycle will get initialized first before ngOnIt(it will  //used for the initialization of the data)...
  // @Input will be used in ngOnChnage life cycle hook...
  // @input will be placed inside child component
  // and same reference will bind in the html selector of the child component
  // and that selector will be called in the parent component
  // this will share data between parant to child component...

}
