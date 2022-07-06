import { Component, OnInit, OnChanges, DoCheck, OnDestroy, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit, Input } from '@angular/core';

@Component({
  selector: 'life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})

export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
  }
  @Input() valueToChange = 10;

  ngOnInit() {
    this.log('ngOnInit');
  }
 
  ngOnChanges() {
    this.log('ngOnChanges');
  }
  ngDoCheck() {
    this.log('ngDoCheck');
  }
 
  ngAfterContentInit() {
    this.log('ngAfterContentInit');
}
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }
 
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
 
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }
 
  onClicked() {
    this.valueToChange = 20;
  }
 
  private log(message:string) {
    console.log(message);
  }
 

}
