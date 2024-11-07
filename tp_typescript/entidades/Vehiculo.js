"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, marca, modelo) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.hojaRuta = [];
    }
    Object.defineProperty(Vehiculo.prototype, "_patente", {
        get: function () {
            return this.patente;
        },
        set: function (value) {
            this.patente = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "_marca", {
        get: function () {
            return this._marca;
        },
        set: function (value) {
            this.marca = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "_modelo", {
        get: function () {
            return this._modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "_moddelo", {
        set: function (value) {
            this.modelo = value;
        },
        enumerable: false,
        configurable: true
    });
    Vehiculo.prototype.calcularTotalKilometrosRecorridos = function (fechaDesde, fechaHasta) {
        var totalKilometros = 0;
        for (var i = 0; i < this.hojaRuta.length; i++) {
            var hoja = this.hojaRuta[i];
            var fechaHoja = hoja.fecha;
            if (fechaHoja >= fechaDesde && fechaHoja <= fechaHasta) {
                totalKilometros += hoja.calcularTotalKilometros();
            }
        }
        return totalKilometros;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
