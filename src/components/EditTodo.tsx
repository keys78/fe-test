import React, { useState } from "react";
import { useAppDispatch } from "../redux/network/hooks";
import { editTodo, deleteTodo } from "../redux/services/todoSlice";

interface EditTodoProps {
  todoId: number;
  initialText: string;
  onClose: () => void;
}

const EditTodo: React.FC<EditTodoProps> = ({
  todoId,
  initialText,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const [editedText, setEditedText] = useState<string>(initialText);

  const handleSaveEdit = () => {
    if (editedText.trim() !== "") {
      dispatch(editTodo({ id: todoId, newText: editedText.trim() }));
      onClose();
    }
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todoId));
    onClose();
  };

  return (
    <div>
      <label htmlFor="">Task Name</label>
      <input
        type="text"
        className='border-2 rounded-md w-full px-6 py-3'
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
    <div className="flex space-x-5">
    <button
        className="bg-red-600 text-white w-full py-3 rounded-md mt-10 max-w-[150px]"
        onClick={handleDeleteTodo}
      >
        Delete
      </button>
      <button
        className="bg-customBlue text-white w-full py-3 rounded-md mt-10"
        onClick={handleSaveEdit}
      >
        Save
      </button>
    </div>
    </div>
  );
};

export default EditTodo;
