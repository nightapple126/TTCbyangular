import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  textValue:string;

  constructor() { }

  ngOnInit() {
  }

  public updateText(text:string) {
    this.textValue = text;
  }

}
