import { Equipo,datosEquipo, } from "../arreglos/arreglos";
export function buscarPoridequipo<t> (datos: t[], idequipo: number, callback: (Element: t )=> void) {
    const Element = datos.find((item: any) => item.idequipo===idequipo);
    if (Element) {
    callback(Element);
}else{
    console.log("Equipo no Encontrado");
    }
}




buscarPoridequipo<Equipo>(datosEquipo, 3, (equipo: Equipo) => {
    console.log("Equipo encontrado:");
    console.log(equipo);
});

