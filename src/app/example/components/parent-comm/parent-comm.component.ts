import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent-comm',
  templateUrl: './parent-comm.component.html',
  styleUrls: ['./parent-comm.component.css']
})
export class ParentCommComponent implements OnInit {
  toggleState:boolean;

  constructor() { }

  ngOnInit() {
  }

  onToggleChildOne() {
    this.toggleState = !this.toggleState;
  }

}
