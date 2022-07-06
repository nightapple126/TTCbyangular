import { Component, OnInit, Input } from '@angular/core';
import { ReaderComponent } from '../reader/reader.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {

  text:string;

  @Input()
  reader: ReaderComponent;

  constructor() { }

  ngOnInit() {
  }

  onTextChange() {
    this.reader.updateText(this.text);
  }

}
