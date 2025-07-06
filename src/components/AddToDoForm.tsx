// this component is to add Todos into the list.
// Created as a separate component as it has its own logic and state management

import { useState } from "react"


//to update the state in the main App.tsx file, we need to pass the input value back to the parent component
//this is done by using a callback function passed as a prop from the parent component
//thus, the below prop interface is being created to pass it.
interface AddToDoFormProps {
    onSubmit: (title: string) => void; // callback function to add a new todo
}


export default function AddToDoForm({onSubmit}: AddToDoFormProps) {

    //turning our input field into a controlled component
    //new state variable to hold the value of the input field
    const [inputValue, setInputValue] = useState ("");

    // setting the state using a seperate function. 
    // this is for the onChange event of the input field

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        // this is to avoid the page from refreshing when the form is submitted
        e.preventDefault(); // prevent the default form submission behavior

        if (!inputValue.trim()) {
            return; // do not submit if the input is empty
        }

        // here you would typically send the inputValue to your backend or update your state
        console.log("New Todo:", inputValue);

        onSubmit(inputValue); // call the onSubmit function passed from the parent component with the input value
        // reset the input field after submission
        setInputValue("");

    }


    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                // this changes the value of the input field into a controlled input
                //by 'this' I mean the VALUE attributed added to the input field
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo"
                className="rounded-s-md grow border border-gray-400 p-2"
            />
            <button type="submit" className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800">
                Add Todo
            </button>
        </form>
    )
}