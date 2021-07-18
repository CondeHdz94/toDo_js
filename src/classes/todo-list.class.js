import { ToDo } from "./todo.class";

export class ToDoList {

    constructor(){

        //this.toDos = [];  /// Ya no es necesario inicializarlo ya que en la función de cargarLocalStorage(); se inicializa o se carga
        
        this.cargarLocalStorage();
        this.conteoPendientes();

    }

    nuevoTodo(toDo){

        this.toDos.push(toDo);
        this.guardarLocalStorage();
    
    }

    eliminarTodo(id){

        this.toDos = this.toDos.filter( toDoCallback => toDoCallback.id != id );
        this.guardarLocalStorage();

    }

    marcarCompletado( id ){

        for (const toDoFor of this.toDos) {
    
            if (toDoFor.id == id) {
                
                toDoFor.completado = !toDoFor.completado;
                this.guardarLocalStorage();
                break;

            }

        }

    }

    eliminarCompletados(){

        this.toDos = this.toDos.filter( toDoCallback => !toDoCallback.completado );
        this.guardarLocalStorage();

    }

    guardarLocalStorage(){

        localStorage.setItem('toDo', JSON.stringify( this.toDos ) );

    }

    cargarLocalStorage(){
        this.toDos  = ( localStorage.getItem('toDo') ) 
                        ? JSON.parse( localStorage.getItem('toDo') ) 
                        : [];

        this.toDos  = this.toDos.map( obj => ToDo.fromJson( obj ) );
        
    }

    conteoPendientes(){

        var count = 0;
        const countArr = this.toDos.map( obj => obj.completado);
        
        countArr.forEach( element => {
            if (element == false) { count++ }
        });

        document.querySelector(".todo-count").children[0].innerHTML = count;

    }

}