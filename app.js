let funcionesDeTareas = require('./funcionesDeTareas')

let process = require ('process')

let instruccion = process.argv[2]

switch (instruccion){
    case  'listar':
    
    let tareas = funcionesDeTareas.leerJSON()//contiene la base de datos
    if (tareas.length === 0) { //si el array de tareas esta vacio
        console.log('la lista de tareas esta vacia');
    } else { //si en el array de tareas hay por lo menos una
        for (let i=0; i < tareas.length; i++){
            console.log(`titulo: ${tareas[i].titulo} -/- estado: ${tareas[i].estado}`)
        }
    }
    break;
    case 'agregar':
        let titulo = process.argv[3]
        let estado = process.argv[4]
        funcionesDeTareas.agregarTarea(titulo, estado)
        break;
    case undefined :
    console.log('Atencion - tienes que pasar una accion');
    break;
    default:
    console.log('no entiendo que quieres hacer');
    break;
}

