import useTodoStore from '../store/TodoStore';
import { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import './TodoApp.css';



const TodoApp = () => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  const addTodo = useTodoStore((state) => state.addTodo);
  const todos = useTodoStore((state) => state.todos);
  const toggleTodos = useTodoStore((state) => state.toggleTodos);
  const deleteTodos = useTodoStore((state) => state.deleteTodos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && description.trim()) {
      addTodo(text, description);
      setText('');
      setDescription('');
    }
  };

  return (
    <div  id='container'>
      <h1>My Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="type todos"
          onChange={(e) => setText(e.target.value)}
        />
        <textarea
          value={description}
          placeholder="description.."
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ol>
        {todos.map((todo) => (
          <div id='spanick'>
          <li key={todo.id}>
            
            <span className='one'
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodos(todo.id)}
            >
              {todo.text}
            </span>
            <p></p>
              <span className='two'
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodos(todo.id)}
            >
              {todo.description}
            </span>
            <button id='delete' onClick={() => deleteTodos(todo.id)}>
              <RiDeleteBinLine />
            </button>
           
          </li>
           </div>
        ))}
      </ol>
    </div>
  );
};

export default TodoApp;

