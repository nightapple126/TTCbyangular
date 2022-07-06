import { Component, OnInit } from '@angular/core';
import { SessionTimerComponent } from '../session-timer/session-timer.component';
import { StockComponent } from './stock/stock.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
