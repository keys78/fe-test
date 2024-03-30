import { createSlice } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Master TypeScript', completed: true },
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: Todo = {
        id: state.todos.length + 1,
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todoToEdit = state.todos.find(todo => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = newText;
      }
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const todoToToggle = state.todos.find(todo => todo.id === id);
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
  },
});

export const { addTodo, editTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
