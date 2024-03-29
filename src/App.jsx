import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";
import "./styles.css";
import { useState } from "react";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state,
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id != id);
    });
  };
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title={`Pendente`}
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          taskState="Pendente"
          onDeleteTask={deleteTask}
        />
        <TaskList
          title={`Fazendo`}
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          taskState="Fazendo"
          onDeleteTask={deleteTask}
        />
        <TaskList
          title={`Completa`}
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdate={updateTask}
          taskState="Completa"
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
