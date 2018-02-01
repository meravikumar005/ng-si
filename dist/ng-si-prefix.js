import { NgModule, Pipe } from '@angular/core';

class SiSuffix {
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
SiSuffix.decorators = [
    { type: Pipe, args: [{ name: 'siSuffix' },] },
];
/**
 * @nocollapse
 */
SiSuffix.ctorParameters = () => [];

class SiSuffixModule {
}
SiSuffixModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SiSuffix
                ],
                imports: [],
                providers: [],
                exports: [
                    SiSuffix
                ]
            },] },
];
/**
 * @nocollapse
 */
SiSuffixModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { SiSuffixModule, SiSuffix as ɵa };
//# sourceMappingURL=ng-si-prefix.js.map
