import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeApi'
})
export class RemoveApiPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace("/api", "");
  }

}
