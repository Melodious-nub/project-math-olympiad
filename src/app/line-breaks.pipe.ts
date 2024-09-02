import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineBreaks'
})
export class LineBreaksPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/(\r\n|\n)/g, '<br>');
  }

}
