import { NgModule, Pipe } from '@angular/core';

class NgSiPipe {
    /**
     * @param {?} value
     * @param {?} decimal
     * @return {?}
     */
    transform(value, decimal) {
        let /** @type {?} */ suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];
        if (value === null || value === undefined) {
            return null;
        }
        else if (window.isNaN(value)) {
            return null;
        }
        else if (value < 1000) {
            return value;
        }
        else {
            let /** @type {?} */ exp = Math.floor(Math.log(value) / Math.log(1000));
            return (value / Math.pow(1000, exp)).toFixed(2) + suffixes[exp - 1];
        }
    }
}
NgSiPipe.decorators = [
    { type: Pipe, args: [{ name: 'NgSiPipe' },] },
];
/**
 * @nocollapse
 */
NgSiPipe.ctorParameters = () => [];

class SiPipeModule {
}
SiPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgSiPipe
                ],
                imports: [],
                providers: [],
                exports: [
                    NgSiPipe
                ]
            },] },
];
/**
 * @nocollapse
 */
SiPipeModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { SiPipeModule, NgSiPipe as ɵa };
//# sourceMappingURL=ng-si.js.map
