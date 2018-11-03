import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

/**
 * This directive adds the class 'z-depth-3' whenever the user mouse over the current element
 */
@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  /** The class to add to hightlight the cad */
  private readonly  _classToHighlight = 'z-depth-5';

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2 ) { }

  @HostListener( 'mouseover')
  highlight() {
    this._renderer.addClass( this._element.nativeElement,this._classToHighlight  );
  }

  @HostListener( 'mouseout')
  remove() {
    this._renderer.removeClass( this._element.nativeElement, this._classToHighlight );
  }

}
