import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Serie} from '../model/serie.model';
import {CONFIGURATION} from '../../../app.module';


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
  constructor(
    private _http: HttpClient,
    @Inject( CONFIGURATION ) private _configuration: any ) { }

  /** Create a given serie */
  create( serie: Serie ): Observable<Serie> {
    return this._http.post<Serie>( this._configuration.backUrl , serie );
  }

  /** Returns the full list of series */
  findAll(): Observable<Serie[]> {
    return this._http.get<Serie[]>( this._configuration.backUrl );
  }
}
