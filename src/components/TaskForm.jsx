import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
    // Estados locales para gestionar la entrada del usuario
    const [taskName, setTaskName] = useState('');
    const [difficulty, setDifficulty] = useState('Fácil');
    const [priority, setPriority] = useState('Baja');

    // Estas son las opciones predefinidas para niveles de dificultad y prioridad
    const difficulties = ['Fácil', 'Medio', 'Difícil'];
    const priorities = ['Baja', 'Media', 'Alta'];

    // Aca Manejamos la presentación de nuevas tareas
    const handleSubmit = (e) => {
        e.preventDefault();

        // Esto verifica que el campo de tarea no esté vacío
        if (taskName.trim() === '') {
            alert('Por favor, ingresa el nombre de la tarea.');
            return;
        }

        // Crear un nuevo objeto de tarea con dificultad y prioridad
        const newTask = {
            id: Date.now(), // Utilizo Data.now como identificador único porque lo use en un ejercicio antes y me funciono bien porque
            // cada llamada a Date.now() en un momento específico dará como resultado un timestamp único, igual lo podemos cambiar por otra forma de asignar un id unico
            name: taskName,
            completed: false,
            difficulty,
            priority,
        };

        onAdd(newTask);

        // Esto es para Limpiar el campo de entrada después de agregar la tarea
        setTaskName('');
        setDifficulty('Fácil');
        setPriority('Baja');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Nueva tarea"
            />
            {/* Estos son los 3 Botones para niveles de dificultad */}
            <select onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
                {difficulties.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {/* Estos son los 3 Botones para niveles de prioridad */}
            <select onChange={(e) => setPriority(e.target.value)} value={priority}>
                {priorities.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <button type="submit">Agregar Tarea</button>
        </form>
    );
};

// Componente de Formulario (TaskForm):
// Este componente contendrá un formulario para agregar nuevas tareas.
// Utilizará el estado local para gestionar la entrada del usuario y enviará la nueva tarea a
// la lista principal.

export default TaskForm;

