import { Directive } from '@angular/core';
import { ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[appHome]'
})
export class HomeDirective {

  constructor(private el: ElementRef, renderer: Renderer) {
       renderer.setElementClass(el.nativeElement, 'btn', true);
       renderer.setElementClass(el.nativeElement, 'btn-info', true);
  }
}
