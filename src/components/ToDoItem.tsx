// Components are written as functions and need to start with an uppercase letter (Pascal case)

// To get this typscript object into this Component, you can pass it as a prop
//props are function arguments to a react component
//in typsecript, you can define the type of the props using an interface
import React from 'react';
import type { Todo } from "../types/todo";

interface ToDoItemProps {
    todo: Todo;
}

export default function ToDoItem({todo}: ToDoItemProps) {
    return (
        <div className='bg-white p-4 rounded-lg shadow-md'>
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-wite hover:bg-slate-50">
                <input
                    type="checkbox"
                    className="scale-125"
                />
                <span className={todo.completed ? 'line-through text-gray-400' : ''}>
                    {todo.title}
                </span>
            </label>
        </div>
    );
}
