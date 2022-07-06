import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'child-comm-two',
  templateUrl: './child-comm-two.component.html',
  styleUrls: ['./child-comm-two.component.css']
})
export class ChildCommTwoComponent implements OnInit {

  
  @Input()
  @HostBinding('class.visible')
  toggleState:boolean;

  constructor() { }

  ngOnInit() {
  }

}
