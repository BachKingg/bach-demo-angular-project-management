import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[app-min-width]'
})
export class MinWidthDirective {
  @Input({
    required: true,
    alias: 'app-min-width'
  }) minWidth?: string | number | null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'min-width',
      this.minWidth === null ? 'unset' : `${this.minWidth}px`
    );
  }
}
