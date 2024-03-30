import React, { useState } from "react";
import Advert from "./components/Advert";
import Profile from "./components/Profile";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import { useAppDispatch, useAppSelector } from "./redux/network/hooks";
import { RootState } from "./redux/network/store";
import { toggleTodo } from "./redux/services/todoSlice";
import { Todo } from "./types/types";
import addButton from "./assets/img/addbutton.png";
import unchecked from "./assets/img/unchecked.png";
import checked from "./assets/img/checked.png";

const App: React.FC = () => {
  const [showAddTask, setShowAddTask] = useState(true);
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editTodoText, setEditTodoText] = useState<string>("");

  const todos = useAppSelector((state: RootState) => state.todos.todos);
  const dispatch = useAppDispatch();

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleEditTodo = (id: number, text: string) => {
    setEditingTodoId(id);
    setEditTodoText(text);
    setShowAddTask(false);
    console.log("text", text);
  };

  const handleCloseEdit = () => {
    setEditingTodoId(null);
    setEditTodoText("");
  };

  return (
    <main className="flex lg:flex-row flex-col items-start justify-center">
      <div className="bg-[#F3F3F3] customShadow__two lg:max-w-[424px] w-full relative z-20">
        <Profile />
        <Advert />
        <ul className="px-4 py-6 max-h-[362px] overflow-y-auto">
          {todos.map((todo: Todo) => (
            <li
              key={todo.id}
              className="bg-white border customShadow px-5 mb-5 py-5 rounded-md flex items-center justify-between"
            >
              <div className="flex items-center space-x-5">
                <div onClick={() => handleToggleTodo(todo.id)}>
                  {todo.completed ? (
                    <img
                      className="w-[26px] cursor-pointer"
                      src={checked}
                      alt="Checked"
                    />
                  ) : (
                    <img
                      className="w-[26px] cursor-pointer"
                      src={unchecked}
                      alt="Unchecked"
                    />
                  )}
                </div>
                <span
                  className={
                    todo.completed ? "text-[#8D8D8D] line-through" : "text-customBlueTwo"
                  }
                >
                  {todo.text.length > 40 ? todo.text.slice(0, 30) + "..." : todo.text}
                </span>
              </div>
              <button
                className="border-2 border-customBlue p-2 text-customBlue rounded-md ml-4"
                onClick={() => handleEditTodo(todo.id, todo.text)}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between px-5 -mr-[5px]">
          <div>&nbsp;</div>
          <button className="" onClick={() => setShowAddTask(true)}>
            <img src={addButton} alt="" />
          </button>
        </div>
      </div>
      <section className="lg:w-[635px] w-[100%] bg-[#F3F3F3] pb-[20px] -ml-[2px]">
        <div className="bg-customBlue flex items-center justify-center">
          <h1 className="text-center text-[24px] font-semibold text-shadow-sm shadow-white-500/50 space-x-6 px-[32px] py-[48px] text-white">
            {showAddTask ? "Add Task" : "Edit Task"}
          </h1>
        </div>
        {showAddTask ? (
          <AddTodo />
        ) : (
          <EditTodo
            todoId={editingTodoId as number}
            initialText={editTodoText}
            onClose={handleCloseEdit}
          />
        )}
      </section>
    </main>
  );
};

export default App;
