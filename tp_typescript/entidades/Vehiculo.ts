import { HojaRuta } from "./HojaRuta";

export class Vehiculo {
    patente: string;
    marca: string;
    modelo: string;
    hojaRuta: Array<HojaRuta>;

    constructor(patente: string, marca: string, modelo: string){
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.hojaRuta = [];
    }

    get _patente(): string{
        return this.patente;
    }
    get _marca(): string {
        return this._marca
    }
    get _modelo(): string {
        return this._modelo
    }

    set _patente(value: string){
        this.patente = value;
    }
    set _marca(value: string){
        this.marca = value;
    }
    set _moddelo(value: string){
        this.modelo = value;
    }

    calcularTotalKilometrosRecorridos(fechaDesde: Date, fechaHasta:  Date): number{
        let totalKilometros: number = 0;
        for(let i = 0; i< this.hojaRuta.length; i++){
            const hoja = this.hojaRuta[i];
            const fechaHoja = hoja.fecha;

            if(fechaHoja >= fechaDesde && fechaHoja <= fechaHasta){
                totalKilometros += hoja.calcularTotalKilometros();
            }
        }
        return totalKilometros;
    }
}