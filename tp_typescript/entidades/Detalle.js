"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Detalle = void 0;
var Detalle = /** @class */ (function () {
    function Detalle(kmSalida, kmRegreso) {
        this.kmSalida = kmSalida;
        this.kmRegreso = kmRegreso;
    }
    Object.defineProperty(Detalle.prototype, "km_Salida", {
        get: function () {
            return this.kmSalida;
        },
        set: function (value) {
            if (value >= 0) {
                this.kmSalida = value;
            }
            else {
                console.error("Los km inresados no son validos");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Detalle.prototype, "km_Regreso", {
        get: function () {
            return this.kmRegreso;
        },
        set: function (value) {
            if (value >= 0) {
                this.kmRegreso = value;
            }
            else {
                console.error("Los km inresados no son validos");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Detalle;
}());
exports.Detalle = Detalle;
