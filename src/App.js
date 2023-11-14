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
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'Lalala', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  console.log('Los usuarios buscan ToDos de: ' + searchValue);

  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch
       searchValue = {searchValue}
       setSearchValue = {setSearchValue}
      />

      <TodoList>
       {searchedTodos.map(todo => (
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
