import {FormControl, FormGroup, Validators} from '@angular/forms';

/**
 * AddSerieForm is the type of form used to add a serie
 */
export class AddSerieForm extends FormGroup {

  /**
   * Default constructor
   */
  constructor() {
    super({
      title: new FormControl( '', Validators.required),
      creators: new FormControl( '', Validators.required ),
      genre: new FormControl( '', Validators.required ),
      releaseYear: new FormControl( (new Date()).getFullYear(), [
        Validators.required,
        Validators.min(1970),
        Validators.max( (new Date()).getFullYear() ) ] ),
      seasons: new FormControl( 1, [ Validators.required, Validators.min(1 ) ] ),
      pictureUrl: new FormControl( '', [ Validators.required, hasFileExtensionValidator( 'jpg' ) ] ),
      synopsis: new FormControl( '', Validators.required ),
    });
  }

  /** Returns true if the release year is less thant 1970 */
  get hasMinReleaseError() {
    const releaseYearControl = this.get( 'releaseYear' );
    return releaseYearControl.hasError( 'min' ) && releaseYearControl.dirty;
  }

  /** Returns true if the release year is less thant 1970 */
  get hasMaxReleaseError() {
    const releaseYearControl = this.get( 'releaseYear' );
    return releaseYearControl.hasError( 'max' ) && releaseYearControl.dirty;
  }
}

/**
 * Validator that checks if the control file url value ends with given extension
 */
const hasFileExtensionValidator = ( extension: string ) => {
  return ( control: FormControl ) => {
    const value: string = control.value;
    const hasFileExtension = value && value.endsWith( '.' + extension );
    return hasFileExtension ? null : { hasFileExtension: true };
  };
}
