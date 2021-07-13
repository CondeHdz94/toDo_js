import { ToDo, ToDoList } from "../classes";

import { taskList } from "../index.js";

/// Referencia al HTML
const divToDoList   = document.querySelector(".todo-list");
const txtInput      = document.querySelector(".new-todo");

const clearAllToDo  = document.querySelector(".clear-completed");

const ulFilters     = document.querySelector(".filters");
const aFilters      = document.querySelectorAll(".filtro");


export const crearToDoHtml = ( toDo ) =>{
    
    const htmlToDo = `
        <li class= "${ (toDo.completado) ? 'completed' : '' }" data-id="${ toDo.id }">
            <div class="view">
                <input class="toggle" type="checkbox" ${ (toDo.completado) ? "checked" : "" }>
                <label>${toDo.tarea}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li> 
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlToDo;

    divToDoList.append(div.firstElementChild);

    return div.firstElementChild;

}


///* EVENTOS *///
txtInput.addEventListener('keyup', ( event ) => {

    if(event.keyCode == 13 && txtInput.value.length > 0){

        const newTask = new ToDo(txtInput.value);
        taskList.nuevoTodo(newTask);
        crearToDoHtml(newTask);

        txtInput.value = "";

    }
    

});


divToDoList.addEventListener('click', ( event ) =>{

    const nameElement = event.target.localName;
    const toDoElement = event.target.parentElement.parentElement; // .parentElement = para seleccionar el padre de ese elemento, un paso atrás del elemento
    const toDoId      = toDoElement.getAttribute('data-id');

    if( nameElement.includes('input')){ // Click en el check

        taskList.marcarCompletado( toDoId );
        toDoElement.classList.toggle( 'completed' );

    } else if( nameElement.includes('button')){ // Click en la X

        taskList.eliminarTodo( toDoId );
        divToDoList.removeChild( toDoElement );
    }

});


clearAllToDo.addEventListener('click', ( event ) =>{

    taskList.eliminarCompletados();

    for (let i = divToDoList.children.length-1; i >= 0; i--) {

        const element = divToDoList.children[i];

        if( element.classList.contains('completed') ){

             divToDoList.removeChild( element );

        }
        
        
    }

});


ulFilters.addEventListener('click', ( event ) =>{

    const filtro = event.target.text;

    if ( !filtro ) { return; } 

    aFilters.forEach( elem => elem.classList.remove('selected') );
    event.target.classList.add('selected')

    for ( const elemento of divToDoList.children ){

        elemento.classList.remove('hidden');
        const complet = elemento.classList.contains('completed');

        switch (filtro) {
            case "Pendientes":

                if ( complet ){

                    elemento.classList.add('hidden');
                    //aFilters.classList.add('selected');

                }
                
            break;

            case "Completados":

                if ( !complet ){

                    elemento.classList.add('hidden');

                }
            
            break;

        }

    }

    

});



