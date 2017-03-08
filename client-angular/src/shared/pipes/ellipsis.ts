import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {
  transform(value, len: number) {
    if (typeof len === 'undefined') {
      return value;
    }
   // let num = parseInt(chars)
    if (value.length > len) {
      return value.substring(0, len) + '...';
    } else {
      return value;
    }
  }
}
