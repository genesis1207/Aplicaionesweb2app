export interface Equipo {
    idequipo: number;
    descripcionequipo: string;
    caracteristicas: string;
}

export interface Pieza {
    idpieza: number;
    caracteristicas: string;
    identificacionpieza: string;
}

export interface Manejo {
    idmanejo: number;
    idpieza: number;
    idequipo: number;
    instrucciones: string;
    detallestecnicos: string;
}

export const datosEquipo: Equipo[] = [
    { idequipo: 1, descripcionequipo: " Computadora", caracteristicas: "Procesador Intel Core i7"},
    { idequipo: 2, descripcionequipo: "Laptop", caracteristicas: "Pantalla de 15 pulgadas" },
    { idequipo: 3, descripcionequipo: "Teléfono móvil", caracteristicas: "Cámara de 64 MP" }
];

export const datosPieza: Pieza[] = [
{ idpieza: 1, caracteristicas: "16GB DDR4", identificacionpieza: "XYZ789" },
{ idpieza: 2, caracteristicas: "Tarjeta gráfica NVIDIA GeForce RTX 3080", identificacionpieza: "DEF456" },
{ idpieza: 3, caracteristicas: "Procesador Intel Core i7-10700K", identificacionpieza: "ABC123" }
   
];

export const datosManejo: Manejo[] = [
 
{ idmanejo: 1, idequipo: 1, idpieza: 1, instrucciones: "Instalar SSD", detallestecnicos: "Abrir la carcasa, conectar el SSD y fijarlo correctamente" },
{ idmanejo: 2, idequipo: 2, idpieza: 2, instrucciones: "Actualizar controladores de la tarjeta gráfica", detallestecnicos: "Descargar los controladores más recientes desde el sitio web oficial y seguir las instrucciones de instalación" },
{ idmanejo: 3, idequipo: 3, idpieza: 3, instrucciones: "Realizar respaldo de datos", detallestecnicos: "Utilizar software de respaldo para copiar los datos importantes en un medio externo" },

];