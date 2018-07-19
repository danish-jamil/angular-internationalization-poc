import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { TranslationService } from './translation.service';

@Directive({
  selector: '[appTransUnit]'
})
export class TransUnitDirective implements OnInit {
  constructor(private el: ElementRef, private ts: TranslationService) {}

  ngOnInit() {
    const ele = this.el.nativeElement;
    for (let i = 0; i < ele.children.length; i++) {
      const id = ele.children[i].getAttribute('id');
      const value = ele.children[i].innerHTML;
      this.ts.messages[id] = value;
    }
  }
}
