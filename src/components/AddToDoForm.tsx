// this component is to add Todos into the list.
// Created as a separate component as it has its own logic and state management

export default function AddToDoForm() {
    return (
        <form className="flex">
            <input 
                placeholder="Add a new todo"
                className="rounded-s-md grow border border-gray-400 p-2"
            />
            <button type="submit" className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800">
                Add Todo
            </button>
        </form>
    )
}