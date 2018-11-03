import {Component, ElementRef, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import 'materialize-css';
import {ActivatedRoute, Router} from '@angular/router';
import {AddSerieForm} from './add-serie.form';
import {ApiService} from '../shared/service/api.service';
import {StoreService} from '../shared/service/store.service';

declare var M;

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.css']
})
export class AddSerieComponent implements OnInit {

  /** Form to define the serie to add */
  form: AddSerieForm;

  /**
   * Default constructor
   * @param _element The component DOM element
   * @param _router The Angular router
   */
  constructor(
    private _api: ApiService,
    private _store: StoreService,
    private _element: ElementRef,
    private _route: ActivatedRoute,
    private _router: Router) { }

  /** Initialize the component */
  ngOnInit() {
    this.initializeModal();
    this.initializeForm();
    this.openModal();
  }

  /** Returns the add modal DOM element*/
  private get modalElement() {
    return this._element.nativeElement.querySelector( '#addModal' );
  }

  /** Cancel the action to add a serie and go back to the parent state */
  cancel() {
    this.goToParent();
  }

  /** Add the serie and go back to the parent state */
  add() {
    this._api.create( this.form.value ).subscribe( addedSerie => {
      this._store.addedSerie = addedSerie;
      this.goToParent()
    });
  }

  /** Initialize the add modal*/
  private initializeModal() {
    M.Modal.init( this.modalElement );
  }

  /** Initialize the add form */
  private initializeForm() {
    this.form = new AddSerieForm();
  }

  /** Open the add modal*/
  private openModal() {
    M.Modal.getInstance( this.modalElement ).open();
  }

  /** Go back to the component parent path */
  private goToParent() {
    M.Modal.getInstance( this.modalElement ).close();
    this._router.navigate( [ '../'], {relativeTo: this._route});
  }


}
