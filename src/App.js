import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de intro a React.js', completed: false},
  {text: 'Lorrar con la Llorona', completed: false},
  {text: 'Lalala', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan ToDos de: ' + searchValue);

  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch
       searchValue = {searchValue}
       setSearchValue = {setSearchValue}
      />

      <TodoList>
       {defaultTodos.map(todo => (
        <TodoItem 
           key={todo.text} 
           text = {todo.text}
           completed = {todo.completed}
        />
       ))}
       {}
      </TodoList>

      <CreateTodoButton/> 

    </>
  );
}




export default App;
