import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'portfilter'})
export class PortPipe implements PipeTransform {
  transform(value:any) {
    return value.filter((i) => i.legnth < 12)
  }
}