import { Equipo, datosEquipo, datosManejo, datosPieza } from "../arreglos/arreglos";


export function mostrarDatos () {
    console.log("Equipos:") ;
    datosEquipo.forEach((equipo: Equipo)=>{
        console.log(equipo);
    });

    console.log("piezas: ") ;
    for (let piezas of datosPieza) {
        console.log(piezas);

    }

    console.log("manejo:");
    for (let manejo in datosManejo) {
        console.log(datosManejo[manejo]);
    }

}