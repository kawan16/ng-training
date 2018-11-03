import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Serie} from '../shared/model/serie.model';
import {ApiService} from '../shared/service/api.service';
import {StoreService} from '../shared/service/store.service';
import {skip} from 'rxjs/operators';

@Component({
  selector: 'app-display-list-serie',
  templateUrl: './display-list-serie.component.html',
  styleUrls: ['./display-list-serie.component.css']
})
export class DisplayListSerieComponent implements OnInit {

  /** A list of series to display */
  series: Serie[];

  constructor(
    private _api: ApiService,
    private _store: StoreService,
    private _router: Router
  ) {}

  /** Whenever one needs to initialize component properties */
  ngOnInit() {
    this.populate();
    this.handleAddedSerie();
  }

  /** Navigate to the details of the serie */
  showDetails( serie: Serie ) {
    this._router.navigate( [ 'serie', 'details', serie.id ] );
  }

  /** Populates the list of series */
  private populate() {
    this.series = [];
    this._api.findAll().subscribe( series => this.series = series );
  }

  /** Refresh the series list whenever a new serie has been added*/
  private handleAddedSerie() {
    this._store.addedSerie$.pipe( skip( 1 ) ).subscribe( newSerie =>  {
      this.series.push( newSerie );
    });
  }
}


