import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-display-serie',
  templateUrl: './display-serie.component.html',
  styleUrls: ['./display-serie.component.css']
})
export class DisplaySerieComponent {

  /** The serie to display */
  @Input()
  serie: any;

  /** Showing details event emitter */
  @Output('detail')
  private _detail$: EventEmitter<void>;

  constructor() {
    this._detail$ = new EventEmitter<void>();
  }

  /** Notify the action of showing details */
  detail() {
    this._detail$.emit();
  }



}
