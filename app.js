const argv = require("./config/yargs").argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        let listado = porHacer.getListado(argv.completadoBusqueda);

        for (let tarea of listado) {
            console.log('======Por Hacer======='.green);
            console.log(tarea.descripcion);
            console.log("Estado:", tarea.completado);
            console.log('======Por Hacer=======\n'.green);
        }
        break;
    case "actualizar":
        let resp = porHacer.actualizar(argv.descripcion, argv.completado);
        if (resp === true) {
            console.log("Se actualizo el registro correctamente");
        } else {
            console.log("Error al actualizar el registro");
        }
        break;
    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("comando no conocido");
}