import { Pipe , PipeTransform} from "@angular/core";
declare let window:any;
@Pipe({name:'siSuffix'})

export class NgSiPipe implements PipeTransform {
  transform(value:number, decimal:number ) {
    let suffixes = [ 'k', 'M', 'G', 'T', 'P', 'E'];
    if(value === null || value === undefined) {
      return null;
    } else if (window.isNaN(value)) {
      return null;
    } else if(value < 1000) {
      return value;
    } else {
      let exp = Math.floor(Math.log(value) / Math.log(1000));
      return (value / Math.pow(1000,exp)).toFixed(2) + suffixes[exp -1];
    }
  }
}
