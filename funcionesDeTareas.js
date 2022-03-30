let fs = require('fs') // Requerimos modulo nativo fs

function leerJSON(){
    return JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'))
}
function escribirJSON(info){
    fs.writeFileSync('./tareas.json',JSON.stringify(info),'utf-8')
}
         
    
    
    agregarTarea : (titulo, estado) =>{
        let tareasAnteriores = moduloTareas.leerJSON() // array original
        
        let nuevaTarea = { // nuevo objeto para agregar en el array original
            titulo : titulo,
            estado : estado
        }

         tareasAnteriores.push(nuevaTarea) //agrego al final del array original el nuevo objeto

         moduloTareas.escribirJSON(tareasAnteriores)
    }
    



module.exports = moduloTareas


