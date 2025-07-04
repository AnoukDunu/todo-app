// this component is to add Todos into the list.
// Created as a separate component as it has its own logic and state management

import { useState } from "react"

export default function AddToDoForm() {

    //turning our input field into a controlled component
    //new state variable to hold the value of the input field
    const [inputValue, setInputValue] = useState ("");
    return (
        <form className="flex">
            <input
                // this changes the value of the input field into a controlled input
                //by 'this' I mean the VALUE attributed added to the input field
                value={inputValue}
                placeholder="Add a new todo"
                className="rounded-s-md grow border border-gray-400 p-2"
            />
            <button type="submit" className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800">
                Add Todo
            </button>
        </form>
    )
}