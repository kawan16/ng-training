import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Serie} from '../model/serie.model';

/**
 * The Rest Api service applied on series
 */

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /**
   * Default constructor
   * @param _http The Angular Http Service
   */
  constructor( private _http: HttpClient ) { }

  /** Create a given serie */
  create( serie: Serie ) {
    return this._http.post( 'http://localhost:3000/series', serie );
  }

  /** Returns the full list of series */
  findAll(): Observable<Serie[]> {
    return this._http.get<Serie[]>( 'http://localhost:3000/series' );
  }
}
