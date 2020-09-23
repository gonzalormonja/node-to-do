const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada o pendiente una tarea'
}
const completadoBusqueda = {
    alias: 'c',
    desc: 'Busca unas tareas en especifico'
}
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('listar', 'lista los elementos', {
        completadoBusqueda
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv: argv
}