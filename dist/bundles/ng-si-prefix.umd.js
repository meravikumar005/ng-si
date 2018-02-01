(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global['ng-si-prefix'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

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
    { type: core.Pipe, args: [{ name: 'siSuffix' },] },
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
    { type: core.NgModule, args: [{
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

exports.SiSuffixModule = SiSuffixModule;
exports.ɵa = SiSuffix;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-si-prefix.umd.js.map
