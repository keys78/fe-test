import React, { useState } from "react";
import Todo from "./components/Todo";
import ActionModal from "./components/ActionModal";

const App: React.FC = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <main className="flex lg:flex-row flex-col items-start justify-center mt-10">
      <Todo setShowAddTask={setShowAddTask} />{" "}
      <ActionModal showAddTask={showAddTask} />
    </main>
  );
};

export default App;
