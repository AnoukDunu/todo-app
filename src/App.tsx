import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { dummyData } from './data/todos'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="py-10 h-screen">
      <h1 className="text-3xl font-bold text-center mb-10"> Your Todos</h1>
        <div className='max-w-lg mx-auto'>
          <div className='space-y-2'>
            {/* the curly braces are baasically used to insert javascript expressions into the html */}
            {dummyData.map((todo) => (
              // when rendering a list of items, you should always provide a unique key prop to each item
              <p key={todo.id} className='text-lg'>
                {todo.title}
              </p>
            ))} 
          </div>
        </div>
    </main>
  );
}

export default App
