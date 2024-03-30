import React, { useState } from 'react';
import Todo from './components/Todo';
import ActionModal from './components/ActionModal';

const App: React.FC = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <main className='flex items-start justify-center'>
      <div className='shadow-lg'>
        <Todo setShowAddTask={setShowAddTask} />
      </div>
      <ActionModal showAddTask={showAddTask} />
    </main>
  );
};

export default App;