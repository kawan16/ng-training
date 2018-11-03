import { Pipe, PipeTransform } from '@angular/core';

/**
 * This pipe removes the http(s):// start of a given url
 */

@Pipe({
  name: 'withoutHttp'
})
export class WithoutHttpPipe implements PipeTransform {

  transform( value: any ): any {
    return value ? value.replace( /http(s)?:\/\//, '' ) : value;
  }

}
