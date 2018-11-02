
import {FormControl, FormGroup} from '@angular/forms';

/**
 * AddSerieForm is the type of form used to add a serie
 */
export class AddSerieForm extends FormGroup {

  /**
   * Default constructor
   */
  constructor() {
    super({
      title: new FormControl( '' ),
      creators: new FormControl( '' ),
      genre: new FormControl( '' ),
      releaseYear: new FormControl( (new Date()).getFullYear() ),
      seasons: new FormControl( 1 ),
      pictureUrl: new FormControl( '' ),
      synopsis: new FormControl( '' ),
    });
  }
}
