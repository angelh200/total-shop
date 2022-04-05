import data from "../data/data";
// Funcion de ayuda que simula una respuesta de los items desde una api y tiene un delay de 1 minuto
const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data);
    }, 1000);
});

export default getItems;