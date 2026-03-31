import React, { useState } from "react";

class Todo {
    constructor(id, task) {
        this.id = id;
        this.task = task;
    }
}

function TodoList() {
    const [todos, setTodos] = useState([
        new Todo(1, "Learn React"),
        new Todo(2, "Build Project"),
        new Todo(3, "Apply Jobs")
    ]);

    const [input, setInput] = useState("");

    const addTodoAtStart = () => {
        if (!input.trim()) return;

        const newTodo = new Todo(Date.now(), input);
        setTodos([newTodo, ...todos]); // prepend
        setInput("");
    };

    return (
        <div>
            <h2>Todo List</h2>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter task"
            />
            <button onClick={addTodoAtStart}>Add Todo</button>

            <ol>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ol>

            <hr />

            <h3>Using Index as Key</h3>
            <ol>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.task}</li>
                ))}
            </ol>
        </div>
    );
}

export default TodoList;