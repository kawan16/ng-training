import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-display-serie',
  templateUrl: './display-serie.component.html',
  styleUrls: ['./display-serie.component.css']
})
export class DisplaySerieComponent {

  /** The serie to display */
  @Input()
  serie: any;

  constructor() { }

}
