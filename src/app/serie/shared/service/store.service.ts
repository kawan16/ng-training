import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Serie} from '../model/serie.model';

/**
 * A store service in order to shared data related to series
 */
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  /** A shared added serie subject */
  private _addedSerie$: BehaviorSubject<Serie>;

  constructor() {
    this._addedSerie$ = new BehaviorSubject<Serie>( null );
  }

  get addedSerie$(): Observable<Serie> {
    return this._addedSerie$.asObservable();
  }

  /** Returns the last added serie */
  get addedSerie(): Serie {
    return this._addedSerie$.getValue();
  }

  /** Set and emits the new added serie */
  set addedSerie( value: Serie ) {
    this._addedSerie$.next( value );
  }
}
