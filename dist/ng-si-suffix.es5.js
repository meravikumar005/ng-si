import { NgModule, Pipe } from '@angular/core';
var SiSuffix = (function () {
    function SiSuffix() {
    }
    /**
     * @param {?} value
     * @param {?} decimal
     * @return {?}
     */
    SiSuffix.prototype.transform = function (value, decimal) {
        var /** @type {?} */ suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];
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
            var /** @type {?} */ exp = Math.floor(Math.log(value) / Math.log(1000));
            return (value / Math.pow(1000, exp)).toFixed(2) + suffixes[exp - 1];
        }
    };
    return SiSuffix;
}());
SiSuffix.decorators = [
    { type: Pipe, args: [{ name: 'siSuffix' },] },
];
/**
 * @nocollapse
 */
SiSuffix.ctorParameters = function () { return []; };
var SiSuffixModule = (function () {
    function SiSuffixModule() {
    }
    return SiSuffixModule;
}());
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
SiSuffixModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { SiSuffixModule, SiSuffix as ɵa };
//# sourceMappingURL=ng-si-suffix.es5.js.map
