import { useState } from 'react';
import { useAppDispatch } from '../redux/network/hooks';
import { addTodo } from '../redux/services/todoSlice';

const AddTodo = () => {
    const dispatch = useAppDispatch()
    const [newTodoText, setNewTodoText] = useState<string>('');

    const handleAddTodo = () => {
        if (newTodoText.trim() !== '') {
          dispatch(addTodo(newTodoText.trim()));
          setNewTodoText('');
        }
      };
  return (
   <div className='mx-6 mt-6' >
    <label>Task Name</label>
     <input 
        type="text"
        className='border-2 rounded-md w-full px-6 py-3'
        value={newTodoText} 
        onChange={(e) => setNewTodoText(e.target.value)} 
      />
      <button 
      className='bg-customBlue text-white w-full py-3 rounded-md mt-10' 
      onClick={handleAddTodo}>Save</button>
   </div>
  )
}

export default AddTodo