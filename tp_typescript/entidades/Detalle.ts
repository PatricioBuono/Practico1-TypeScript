import { HojaRuta } from "./HojaRuta";

export class Detalle {
    kmSalida: number;
    kmRegreso: number;
    horaSalida: number;
    horaRegreso: number;
    minutoSalida: number;
    minutoRegreso: number;
    hojaRuta: Array<HojaRuta>;


    constructor(kmSalida: number, kmRegreso: number){
        this.kmSalida= kmSalida;
        this.kmRegreso = kmRegreso;
    }

    get km_Salida(): number {
        return this.kmSalida;
    }
    get km_Regreso(): number {
        return this.kmRegreso;
    }

    set km_Salida(value: number){
        if(value >=0){
            this.kmSalida = value;
        } else{
            console.error("Los km inresados no son validos");
        }
    }

    set km_Regreso(value: number){
        if(value >=0){
            this.kmRegreso = value;
        } else{
            console.error("Los km inresados no son validos");
        }
    }
}