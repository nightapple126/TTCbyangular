import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit{
  constructor(private el: ElementRef) { }
  ngAfterViewInit() {
    this.el.nativeElement.classList.add('highlight');
  }
}
