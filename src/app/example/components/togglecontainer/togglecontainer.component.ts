import { Component, OnInit, HostBinding } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'togglecontainer',
  templateUrl: './togglecontainer.component.html',
  styleUrls: ['./togglecontainer.component.css']
})
export class TogglecontainerComponent implements OnInit {
  toggleService:ToggleService;
  @HostBinding('class.is-open')
  isOpen: boolean;
  
  constructor(toggleService:ToggleService) {
    this.toggleService = toggleService;
   }

  ngOnInit() {
    this.toggleService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

}
