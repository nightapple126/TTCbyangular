import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionTimerService } from '../service/session-timer.service';
import { LoginInterceptorService } from '../service/login-interceptor.service';

@Component({
  selector: 'session-timer',
  templateUrl: './session-timer.component.html',
  styleUrls: ['./session-timer.component.css']
})
export class SessionTimerComponent implements OnInit {
  timer: Observable<Date>;
  time: Date;
  loggedInTime: Date;
  constructor(public sessionTimerService: SessionTimerService,private loginInterceptorService: LoginInterceptorService) { }

  ngOnInit() {
    this.loggedInTime = this.loginInterceptorService.logInTime;
    this.sessionTimerService.intervalObserver.subscribe(x => {
      this.time = x;
    }, onError => { }, () => {
      console.log('Complete');
    })
  }

  ngOnDestroy() {
    console.log('dispose');
  }

}
