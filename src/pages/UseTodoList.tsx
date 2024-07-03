import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const UseTodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^[a-zA-Z\s]*$/.test(value)) {
      setNewTodo(value);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
    <div className="max-w-md p-4 bg-[#c7efff] rounded-lg shadow-2xl">
      <div className="w-full flex justify-center">
        <h1 className="text-3xl font-bold mb-5 tracking-wide">Todo List</h1>
      </div>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow py-2 px-4 border rounded-lg"
          value={newTodo}
          onChange={handleChange}
          placeholder="Add a new task"
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center mb-2">
            <span
              className={`flex-grow ${todo.completed ? "" : ""}`}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button
              className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
              onClick={() => removeTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default UseTodoList;

