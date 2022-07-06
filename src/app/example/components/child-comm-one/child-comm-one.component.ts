import { Component, OnInit, Output, HostListener, EventEmitter } from '@angular/core';


@Component({
  selector: 'child-comm-one',
  templateUrl: './child-comm-one.component.html',
  styleUrls: ['./child-comm-one.component.css']
})
export class ChildCommOneComponent implements OnInit {
  toggleState:boolean = true;
  @Output()
  toggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  @HostListener('click')
  onclick() {
    this.toggleState = !this.toggleState;
    this.toggle.emit();
  }

}
