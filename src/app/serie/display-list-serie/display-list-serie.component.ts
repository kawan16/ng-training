import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display-list-serie',
  templateUrl: './display-list-serie.component.html',
  styleUrls: ['./display-list-serie.component.css']
})
export class DisplayListSerieComponent implements OnInit {

  /** A serie to display */
  serie: any;

  constructor( private _router: Router ) {}

  /** Whenever one needs to initialize component properties */
  ngOnInit() {
     this.serie = series[0];
  }

  /** Navigate to the details of the serie */
  showDetails() {
    this._router.navigate( [ 'serie', 'details', this.serie.id ] );
  }
}


