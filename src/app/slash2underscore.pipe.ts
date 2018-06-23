import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slash2underscore'
})
export class Slash2underscorePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\//g, '_');
  }

}
