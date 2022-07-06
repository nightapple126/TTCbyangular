import { Component, OnInit } from '@angular/core';
import { IntObservableService } from '../services/int-observable.service';

@Component({
  selector: 'async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  intObservableService:any;
  nextIntValue:number;
  constructor(intObservableService: IntObservableService) { 
    this.intObservableService = intObservableService;
  }

  ngOnInit() {
    this.nextIntValue = this.intObservableService.intObserver;
  }

}
