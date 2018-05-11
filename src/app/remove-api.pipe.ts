import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeApi'
})
export class RemoveApiPipe implements PipeTransform {

  transform(value: String): String {
    return value.replace("/api", "");
  }

}
