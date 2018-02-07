import { NgModule, Pipe } from '@angular/core';
var NgSiPipe = (function () {
    function NgSiPipe() {
    }
    /**
     * @param {?} value
     * @param {?} decimal
     * @return {?}
     */
    NgSiPipe.prototype.transform = function (value, decimal) {
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
    return NgSiPipe;
}());
NgSiPipe.decorators = [
    { type: Pipe, args: [{ name: 'siSuffix' },] },
];
/**
 * @nocollapse
 */
NgSiPipe.ctorParameters = function () { return []; };
var SiPipeModule = (function () {
    function SiPipeModule() {
    }
    return SiPipeModule;
}());
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
SiPipeModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { SiPipeModule, NgSiPipe as ɵa };
//# sourceMappingURL=ng-si.es5.js.map
