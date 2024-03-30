import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/network/hooks';
import { RootState } from '../redux/network/store';
import { toggleTodo } from '../redux/services/todoSlice';
import EditTodo from './EditTodo';
import { Todo } from '../types/types';

interface TodoListProps {
    setShowAddTask: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoList: React.FC<TodoListProps> = ({ setShowAddTask }) => {
    const todos = useAppSelector((state: RootState) => state.todos.todos);
    const dispatch = useAppDispatch();
    const [editingTodoId, setEditingTodoId] = useState<number | null>(null);

    const handleToggleTodo = (id: number) => {
        dispatch(toggleTodo(id));
    };

    const handleEditTodo = (id: number) => {
        setEditingTodoId(id);
        setShowAddTask(false);
    };

    const handleCloseEdit = () => {
        setEditingTodoId(null);
    };

    return (
        <ul className='px-4 py-6'>
            {todos.map((todo: Todo) => (
                <li key={todo.id} className='bg-white customShadow px-5 mb-5 py-5 rounded-md flex items-center justify-between'>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggleTodo(todo.id)}
                    />
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                    <button className='border-2 border-customBlue p-2 text-customBlue' onClick={() => handleEditTodo(todo.id)}>Edit</button>
                </li>
            ))}
            {editingTodoId !== null && (
                <EditTodo
                    todoId={editingTodoId}
                    initialText={todos.find((todo: Todo) => todo.id === editingTodoId)?.text || ''}
                    onClose={handleCloseEdit}
                />
            )}
        </ul>
    );
};

export default TodoList;
