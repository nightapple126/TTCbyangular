import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'since'
})
export class SincePipe implements PipeTransform {
  transform(value: any, referenceTime: any): string {
    let leftSeconds = Math.round((Date.now() - referenceTime) / 1000);
    let hours = Math.round(leftSeconds / 3600) | 0;
    leftSeconds = leftSeconds % 3600;
    let minutes = Math.round(leftSeconds / 60) | 0;
    leftSeconds = (leftSeconds % 60) | 0;
    let sinceValue = '';
    if (hours > 0) {
      sinceValue += hours + 'h: ';
    }
    if (minutes > 0) {
      sinceValue += minutes + 'm: ';
    }
    sinceValue += leftSeconds + 's';
    return sinceValue;
  }
}
