import { Detalle } from "./Detalle";
import { Vehiculo } from "./Vehiculo";

export class HojaRuta {
    fecha: Date;
    numero: number;
    detalle: Array<Detalle>;
    vehiculo: Vehiculo;

    constructor(fecha: Date, numero: number){
        this.fecha = fecha;
        this.numero = numero;
        this.detalle = [];
    }

    get _fecha(): Date {
        return this.fecha;
    }
    get _numero(): number {
        return this.numero;
    }
    get _vehiculo(): Vehiculo {
        return this.vehiculo;
    }

    set _fecha(value: Date){
        this.fecha = value;
    }
    set _numero(value: number){
        this.numero = value;
    }
    set _vehiculo(value: Vehiculo){
        this.vehiculo = value;
    }

    calcularTotalKilometros(): number{
        let totalKilometros = 0;
        for(let i=0; i<this.detalle.length; i++){
            const d = this.detalle[i];
            totalKilometros += (d.kmRegreso-d.kmSalida);
        }
        return totalKilometros;
    }
}