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
  @Output('on-random')
  private _random$: EventEmitter<void>;

  constructor() {
    this._random$ = new EventEmitter<void>();
  }

  /** Notify the need of select randomly an other serie*/
  random() {
    this._random$.emit();
  }



}
