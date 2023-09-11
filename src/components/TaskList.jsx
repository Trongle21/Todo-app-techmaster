import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks = [], onDelete, onChoose }) => {
  const isEmpty = tasks.length === 0;

  if (isEmpty)
    return (
      <ul className="task-list">
        <li className="task-empty">Nothing here</li>
      </ul>
    );

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          onDelete={onDelete}
          id={task.id}
          key={task.id}
          {...task}
          onChoose={onChoose}
        />
      ))}
    </ul>
  );
};

export default TaskList;
