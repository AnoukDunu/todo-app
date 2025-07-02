// this component is to add Todos into the list.
// Created as a separate component as it has its own logic and state management

export default function AddToDoForm() {
    return (
        <form>
            <input 
                placeholder="Add a new todo"
                className="rounded-s-md"
            />
        </form>
    )
}