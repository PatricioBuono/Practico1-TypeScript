import { Vehiculo } from "./Vehiculo";
import { HojaRuta } from "./HojaRuta";
import { Detalle } from "./Detalle";

class TestA {
    public static main(): void {
        // Crear instancia de Vehiculo
        const vehiculo = new Vehiculo("ABC123", "Toyota", "Corolla");
        vehiculo.patente = "ABC123";
        vehiculo.marca = "Toyota";
        vehiculo.modelo = "Corolla";
        vehiculo.hojaRuta = [];

        // Crear instancias de HojaRuta
        const hojaRuta1 = new HojaRuta(new Date(2024, 0, 1), 1);
        const hojaRuta2 = new HojaRuta(new Date(2024, 0, 2), 2);
        const hojaRuta3 = new HojaRuta(new Date(2024, 0, 3), 3);

        // Asignar detalles a cada HojaRuta
        hojaRuta1.detalle = [
            new Detalle(100, 150),
            new Detalle(150, 200),
            new Detalle(200, 250)
        ];

        hojaRuta2.detalle = [
            new Detalle(300, 350),
            new Detalle(350, 400),
            new Detalle(400, 450)
        ];

        hojaRuta3.detalle = [
            new Detalle(500, 550),
            new Detalle(550, 600),
            new Detalle(600, 650)
        ];

        // Agregar las hojas de ruta al vehículo
        vehiculo.hojaRuta.push(hojaRuta1, hojaRuta2, hojaRuta3);

        // Imprimir los detalles de cada hoja de ruta
        console.log("Detalles de las Hojas de Ruta:");
        vehiculo.hojaRuta.forEach((hojaRuta, index) => {
            console.log(`\nHoja de Ruta ${index + 1} - Fecha: ${hojaRuta.fecha}`);
            hojaRuta.detalle.forEach((detalle, detalleIndex) => {
                console.log(`  Detalle ${detalleIndex + 1} - Km Salida: ${detalle.kmSalida}, Km Regreso: ${detalle.kmRegreso}`);
            });
        });

        // Calcular y mostrar el total de kilómetros recorridos en un rango de fechas
        const fechaDesde = new Date(2024, 0, 1);
        const fechaHasta = new Date(2024, 0, 3);
        const totalKilometros = vehiculo.calcularTotalKilometrosRecorridos(fechaDesde, fechaHasta);

        console.log(`\nTotal kilómetros recorridos entre ${fechaDesde.toDateString()} y ${fechaHasta.toDateString()}: ${totalKilometros} km`);
    }
}

// Ejecutar la prueba
TestA.main();
