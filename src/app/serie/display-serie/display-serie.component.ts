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

  /** Notify the random selection action */
  @Output('on-detail')
  private _detail$: EventEmitter<void>;

  constructor() {
    this._detail$ = new EventEmitter<void>();
  }

  /** Notify the need of showing the details of the currentserie*/
  detail() {
    this._detail$.emit();
  }



}
