import { Component, OnInit, HostBinding } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  toggleService:ToggleService;
  
  constructor(toggleService:ToggleService) { 
    this.toggleService = toggleService;
  }

  ngOnInit() { 
  }

  toggleState() {
    this.toggleService.toggle();
  }

}
