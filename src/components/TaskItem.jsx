import React, { useState } from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
  // Estado local para gestionar la apariencia de la tarea
  const [isCompleted, setIsCompleted] = useState(false);

  // Con esto Manejamos la tarea como completada y actualizar el estado local
  const handleComplete = () => {
    setIsCompleted(!isCompleted);
    // Llamamos a la función de completar desde el componente principal
    onComplete(task.id);
  };

  // Con esto Manejamos la eliminación de la tarea
  const handleDelete = () => {
    // Llamamos a la función de eliminar desde el componente principal
    onDelete(task.id);
  };

  return (
    // Esto le agrega el estilo a la tarea completada
    <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}> 
      <div>
        <strong>{task.name}</strong>
      </div>
      <div>
        Dificultad: {task.difficulty} - Prioridad: {task.priority}
      </div>
      {/* Botón para completar la tarea */}
      <button onClick={handleComplete}>Completar</button>
      {/* Botón para eliminar la tarea */}
      <button onClick={handleDelete}>Eliminar</button>
    </li>
  );
};

// Componente de Tarea (TaskItem):
// Este componente deberá representar individualmente una tarea.
// Mostrará el nombre de la tarea y un botón para completarla.
// Utilizará el estado local para gestionar la apariencia de la tarea (por ejemplo, tachado
// cuando esté completada).

export default TaskItem;
