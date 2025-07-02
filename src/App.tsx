import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import { dummyData } from './data/todos'
import ToDoItem from './components/ToDoItem'
import { useState } from 'react'


function App() {
  // const [count, setCount] = useState(0)

  // to actually change the state of the todo items when clicked, we need the react state
  // the functions that start with the word "use" are called hooks
  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, completed: boolean) {
    // this function will be called when the checkbox is checked or unchecked
    // you can use this function to update the state of the todo item
    // for now, we will just log the id and completed status to the console
    console.log(`Todo with id ${id} is now ${completed ? 'completed' : 'not completed'}`);

    setTodos((prevTodos) => 
      prevTodos.map((todo) => (
        todo.id == id ? { ...todo, completed } : todo
      ))
    );

  return (
    <main className="py-10 h-screen">
      <h1 className="text-3xl font-bold text-center mb-10"> Your Todos</h1>
        <div className='max-w-lg mx-auto'>
          <div className='space-y-2'>
            {/* the curly braces are baasically used to insert javascript expressions into the html */}
            {todos.map((todo) => (
              // when rendering a list of items, you should always provide a unique key prop to each item
              // <p key={todo.id} className='text-lg'>
              //   {todo.title}
              // </p>

              <ToDoItem 
              key={todo.id}
              todo={todo}
              onCompletedCheck={setTodoCompleted}/>
            ))} 
          </div>
        </div>
    </main>
  );
}

export default App
