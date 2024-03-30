import React from 'react';
import AddTodo from "./AddTodo";

interface ActionModalProps {
    showAddTask: boolean;
}

const ActionModal: React.FC<ActionModalProps> = ({ showAddTask }) => {
    return (
        <section>
            <div className="bg-customBlue flex items-center justify-center w-[635px]">
                <h1 className="text-center space-x-6 px-[32px] py-[49px] text-white">
                    {showAddTask ? 'Add Task' : 'Edit Task'}
                </h1>
            </div>
            {showAddTask ? <AddTodo /> : ''}
        </section>
    );
};

export default ActionModal;

