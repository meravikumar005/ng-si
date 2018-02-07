(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global['ng-si'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

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
    { type: core.Pipe, args: [{ name: 'NgSiPipe' },] },
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
    { type: core.NgModule, args: [{
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

exports.SiPipeModule = SiPipeModule;
exports.ɵa = NgSiPipe;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-si.umd.js.map
