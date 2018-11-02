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
      seasons: new FormControl( 1, [ , Validators.required, Validators.min(1 ) ] ),
      pictureUrl: new FormControl( '', Validators.required ),
      synopsis: new FormControl( '', Validators.required ),
    });
  }
}
