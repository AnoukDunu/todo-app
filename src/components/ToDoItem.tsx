// Components are written as functions and need to start with an uppercase letter (Pascal case)

// To get this typscript object into this Component, you can pass it as a prop
//props are function arguments to a react component
//in typsecript, you can define the type of the props using an interface
import type { Todo } from "../types/todo";

interface ToDoItemProps {
    todo: Todo;
    //creating another prop with the name
    //this prop is also being made as a function, which is why it looks kinda weird below
    //this function takes arguments. These paraments/arguments are so that the parent knows which items are completed etc. Simple stuff
    onCompletedCheck: (id: number, completed: boolean) => void;
}

export default function ToDoItem({todo, onCompletedCheck}: ToDoItemProps) {
    return (
        <div className='bg-white p-4 rounded-lg shadow-md'>
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-wite hover:bg-slate-50">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    // executing the callback function below
                    onChange={(e) => onCompletedCheck(todo.id, e.target.checked)}
                    className="scale-125"
                />
                <span className={todo.completed ? 'line-through text-gray-400' : ''}>
                    {todo.title}
                </span>
            </label>
        </div>
    );
}
