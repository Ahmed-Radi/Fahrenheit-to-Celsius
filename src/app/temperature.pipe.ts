import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, unit: string) {
    if (value && !isNaN(value)) {
      if (unit === 'c') {
        // var f = true
        return (value - 32)/1.8
      } else if (unit === 'f') {
        return (value * 1.8) + 32
      }
    }
    return null;
  }

}
