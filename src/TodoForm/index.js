import React from "react";
import {TodoContext} from '../TodoContext';
import './TodoForm.css';
import react from "react";

function TodoForm(){
    const {
        addTodo,        
        setOpenModal,
    } = React.useContext(TodoContext);
const [newTodoValue, setNewTodoValue] = React.useState('');

const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
}
const onCancel = (event) => {    
    setOpenModal(false);
}
const onChange = (event) => {    
    setNewTodoValue (event.target.value);
}

    return (
        <form onSubmit={onSubmit}>
            <label>Write your new TODO</label>
            <textarea 
                placeholder="Write your new TODO"
                value={newTodoValue}
                onChange={onChange}
            > 
            </textarea>
            <div className="TodoForm-buttonContainer"> 
            <button 
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
            >Cancel</button>
            <button 
            type="submit"
            className="TodoForm-button TodoForm-button--add"
            >Add</button>
            </div>
        </form>
    );
}

export {TodoForm};