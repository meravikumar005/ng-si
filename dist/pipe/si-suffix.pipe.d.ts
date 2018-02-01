import { PipeTransform } from "@angular/core";
export declare class SiSuffix implements PipeTransform {
    transform(value: number, decimal: number): string | number;
}
