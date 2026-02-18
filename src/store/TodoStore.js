import { create } from 'zustand';

const useTodoStore = create((set) => ({
  todos: [],

  addTodo: (text, description) => set((state) => ({
    todos: [
      ...state.todos,
      {
        id: Date.now(),
        text: text,
        description: description,
        completed: false
      }
    ]
  })),

  toggleTodos: (id) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),

  deleteTodos: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  }))
}));

export default useTodoStore;
