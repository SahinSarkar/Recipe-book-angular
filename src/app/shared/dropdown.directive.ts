import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
  }

  isOpen = false;
  @HostBinding('class') toggleDropdownClass;

  @HostListener('click') toggleDropDown(event: Event) {
    // // tslint:disable-next-line:no-debugger
    // debugger;
    if (!this.isOpen) {
      this.toggleDropdownClass = 'open';
    } else {
      this.toggleDropdownClass = null;
    }

    this.isOpen = !this.isOpen;
  }

}
