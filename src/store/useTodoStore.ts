import { create } from "zustand";
import {
  type Todo,
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../services/todoApi";

interface TodoStore {
  todos: Todo[];
  fetchTodos: () => Promise<void>;
  addTodo: (title: string, description: string) => Promise<void>;
  editTodo: (id: string, updatedFields: Partial<Todo>) => Promise<void>;
  removeTodo: (id: string) => Promise<void>;
}
export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  fetchTodos: async () => {
    const data = await getTodos();
    set({ todos: data });
  },

  // ADD
  addTodo: async (title, description) => {
    const newTodo = await createTodo(title, description);
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },

  //Edit
  editTodo: async (id, updatedFields) => {
    const updated = await updateTodo(id, updatedFields);
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? updated : todo)),
    }));
  },
  //Remove
  removeTodo: async (id) => {
    await deleteTodo(id);
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
  },
}));
