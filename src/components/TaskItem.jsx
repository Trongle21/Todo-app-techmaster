import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "./Button";

const TaskItem = ({ id, title, completed, onDelete, onChoose }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleChange = () => {
    onChoose(id)
  };

  return (
    <li className="task-item">
      <label>
        <input type="checkbox" onChange={handleChange} checked={completed} />
        <span className="task-title">{title}</span>
        <Button onClick={handleDelete} onChange={handleChange}>
          <AiOutlineDelete />
        </Button>
      </label>
    </li>
  );
};

export default TaskItem;
