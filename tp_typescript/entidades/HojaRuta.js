"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HojaRuta = void 0;
var HojaRuta = /** @class */ (function () {
    function HojaRuta(fecha, numero) {
        this.fecha = fecha;
        this.numero = numero;
        //this.vehiculo = vehiculo;
        this.detalle = [];
    }
    Object.defineProperty(HojaRuta.prototype, "_fecha", {
        get: function () {
            return this.fecha;
        },
        set: function (value) {
            this.fecha = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HojaRuta.prototype, "_numero", {
        get: function () {
            return this.numero;
        },
        set: function (value) {
            this.numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HojaRuta.prototype, "_vehiculo", {
        get: function () {
            return this.vehiculo;
        },
        set: function (value) {
            this.vehiculo = value;
        },
        enumerable: false,
        configurable: true
    });
    HojaRuta.prototype.calcularTotalKilometros = function () {
        var totalKilometros = 0;
        for (var i = 0; i < this.detalle.length; i++) {
            var d = this.detalle[i];
            totalKilometros += (d.kmRegreso - d.kmSalida);
        }
        return totalKilometros;
    };
    return HojaRuta;
}());
exports.HojaRuta = HojaRuta;
