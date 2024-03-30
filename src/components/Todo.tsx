import React from 'react';
import Profile from './Profile';
import Advert from './Advert';
import TodoList from './TodoList';
import addButton from '../assets/img/addbutton.png'

interface TodoProps {
    setShowAddTask: React.Dispatch<React.SetStateAction<boolean>>;
}

const Todo: React.FC<TodoProps> = ({ setShowAddTask }) => {
    return (
        <section className='lg:max-w-[424px] w-[100%] bg-gray-100 shadow-lg'>
            <Profile />
            <Advert />
            <TodoList setShowAddTask={setShowAddTask}/>
            <div className='flex items-center justify-between px-5'>
              <div>&nbsp;</div>
            <button className='' onClick={() => setShowAddTask(true)}>
              <img src={addButton} alt="" />
            </button>
            </div>
        </section>
    );
}

export default Todo;
