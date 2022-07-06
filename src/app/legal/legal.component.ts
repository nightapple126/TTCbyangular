import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from './gaurd/compA.deactivate.gaurd';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent implements OnInit , ComponentCanDeactivate{

  constructor() { }

  ngOnInit() {
  }

  canDeactivate() :Observable<boolean> | boolean{
    return confirm('Do you want to go?');
  }
}
