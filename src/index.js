import './styles.css';

import { crearToDoHtml } from './js/componentes.js';
import { ToDo, ToDoList } from './classes/index.js'; // Se puede dejar como './classes/' ya que al tener un archivo index detro de la carpeta de clases accede automaticamente a este



export const taskList = new ToDoList();

taskList.toDos.forEach( toDoForEach => crearToDoHtml( toDoForEach ) );

/** Esta forma se puede usar sí el primer argumento en el método está llamando a esa función SÍ SOLO ES UN ARGUMOENTO **/
//taskList.toDos.forEach( crearToDoHtml ); 



//console.log(taskList.toDos);
taskList.toDos[0].printClass(); /// Ya se puede tratar cómo objeto