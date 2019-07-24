import { Directive, HostListener } from '@angular/core';
import { ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[appHome]'
})
export class HomeDirective {

  private _isActive = false;

  constructor(private el: ElementRef, private renderer: Renderer) {

  }

  @HostListener('click', ['$event'])
  onClick(e) {
      e.preventDefault();
      this.renderer.setElementClass(this.el.nativeElement, 'btn-primary', this._isActive);
  }
}
