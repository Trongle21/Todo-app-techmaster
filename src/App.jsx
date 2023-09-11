import { useEffect, useState } from "react";
import Button from "./components/Button";
import CreateTaskForm from "./components/CreateTaskForm";
import FilterForm from "./components/FilterTaskForm";
import TaskList from "./components/TaskList";
import { createTask, deleteTask, updateTask } from "./service/todo.service";

function App() {
  const [filterValue, setFilterValue] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignored = false;

    const getTask = async () => {
      try {
        const res = await fetch(
          "https://jsonserver-fhn2.onrender.com/api/todos"
        );

        if (!res.ok) {
          throw new Error("loi khong co api");
        }

        const data = await res.json();
        if (!ignored) setTasks(data);
      } catch (error) {
        if (!ignored) setError(error);
      } finally {
        if (!ignored) setLoading(false);
      }
    };
    getTask();

    return () => {
      ignored = true;
    };
  }, []);

  const handleFilterValueChange = (filterValue) => {
    setFilterValue(filterValue);
  };

  const handleChoose = async (id) => {
    await updateTask(id, !tasks.find((task) => task.id === id).completed);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const pendingTask = tasks.map((task) => !task.completed).length;

  const filterTask = tasks.filter((task) =>
    filterValue === "all"
      ? true
      : filterValue === "done"
      ? !task.completed
      : task.completed
  );

  /**
   * Thêm một công việc mới
   *
   * @param {string} title nội dung công việc
   */

  const handleAdd = async (title) => {
    const newTask = await createTask(title, true);

    setTasks([...tasks, newTask]);
  };

  /**
   * Xóa công việc
   *
   * @param {string} id
   */

  const handleDelete = async (id) => {
    await deleteTask(id);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleClear = () => {
    if (confirm("Bạn có chắc chắn xóa")) setTasks([]);
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="heading">Todo App</h1>

        <CreateTaskForm onSubmit={handleAdd} />

        <FilterForm
          onFilterValue={handleFilterValueChange}
          filterValue={filterValue}
        />

        {loading ? (
          <div>loading...</div>
        ) : error ? (
          <div>Lỗi</div>
        ) : (
          <>
            <TaskList
              onDelete={handleDelete}
              onChoose={handleChoose}
              tasks={filterTask}
            />

            <div className="task-summary">
              <p className="task-summary-count">
                You have {pendingTask} pending task
              </p>

              <Button variant="danger" onClick={handleClear}>
                Clear
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
