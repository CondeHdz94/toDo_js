export class ToDo {

    static fromJson( {id, tarea, completado, creado} ){

        const tempToDo = new ToDo( tarea );

        tempToDo.id         = id;
        tempToDo.completado = completado;
        tempToDo.creado     = creado;

        return tempToDo;

    }

    constructor(tarea) {

        this.tarea = tarea;

        this.id         = new Date().getTime(); //id de prueba
        this.completado = false;
        this.creado     = new Date();

    }

    printClass(){

        console.log(`${this.tarea} - ${this.id}`);

    }

}