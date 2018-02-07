import { PipeTransform } from "@angular/core";
export declare class NgSiPipe implements PipeTransform {
    transform(value: number, decimal: number): string | number;
}
