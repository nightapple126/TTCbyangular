import {CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs/Rx';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

export class CompADeactivateGaurd implements CanDeactivate<any> {
  canDeactivate(component:ComponentCanDeactivate):Observable<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
