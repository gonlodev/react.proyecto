import React, { useState, useEffect } from 'react';
import Titulo from './components/Titulo.jsx';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  // Estado principal para gestionar la lista de tareas
  const [tasks, setTasks] = useState(() => {
    // Intentar obtener las tareas desde localStorage al cargar la página
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // Efecto de Actualización
  useEffect(() => {
    // Guardar las tareas en localStorage cada vez que se actualizan
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Función para agregar nuevas tareas al estado principal
  const addTask = (newTask) => {
    alert('Has agregado una nueva tarea')
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Función para marcar una tarea como completada
  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
    );
  };

  // Función para eliminar una tarea
  const deleteTask = (taskId) => {
    alert('Has Eliminado una tarea')
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <Titulo />
      {/* Este es el Componente de Lista de Tareas */}
      <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
      {/* Este es el Componente de Formulario */}
      <TaskForm onAdd={addTask} />
    </div>
  );
};

export default App;



