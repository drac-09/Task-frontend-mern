import "../styles/tailwind.css";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect } from "react";

//Modificar la fecha
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams(); // Obtiene un objeto con los datos dinamico de la URL.

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs.utc(task.date).format("YYYY-MM-DD"));
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }

    navigate("/tasks");
  });

  return (
    <div className="flex h-[calc(100vh-139px)] justify-center items-center">
      <div className="w-full max-w-md bg-black bg-opacity-40 p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <div className="bg-slate-950 mb-10">
            <div className="relative bg-inherit">
              <input
                id="title"
                type="text"
                placeholder=" "
                autoFocus
                {...register("title")}
                className="input peer"
              />
              <label htmlFor="title" className="label">
                Title
              </label>
            </div>
          </div>

          <div className="bg-slate-950 mb-5">
            <div className="relative bg-inherit">
              <textarea
                id="description"
                type="text"
                placeholder=" "
                {...register("description")}
                className="text peer"
              ></textarea>
              <label htmlFor="description" className="label">
                Description
              </label>
            </div>
          </div>

          <div className="bg-slate-950 mb-5">
            <div className="relative bg-inherit">
              <input
                type="date"
                placeholder=""
                {...register("date")}
                className="input peer"
              />
              <label htmlFor="date" className="label">
                Date
              </label>
            </div>
          </div>

          <div className="flex justify-center md:justify-end gap-2">
            <button id="save" className=" btn bg-sky-500 rounded-md">
              Save
            </button>
            <button id="save" className="btn bg-red-500 rounded-md">
              <Link to="/tasks">Cancel</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
