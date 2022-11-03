//material

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { editTask, addTask } from './../services/tasks/taskSlice'
import { v4 as uuid } from 'uuid';

export default function TaskForm() {

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: ""
  })
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const tasks = useSelector(data => data.tasks)

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find(task => task.id === params.id))
    }
  }, [params, tasks]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (params.id) {

      dispatch(editTask({
        ...task,
        id: params.id,
      }))

    } else {

      const date = new Date()
      dispatch(addTask({
        ...task,
        id: uuid(),
        completed: false,
        date: date.getDate("es-MX")
      }))

    }
    navigate("/")
  }

  const handlerChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })

  }

  return (
    <div
      className="bg-gray-800 p-8 mx-auto w-9/12 rounded-xl mb-72">

      <form onSubmit={handlerSubmit}>
        <div className="grid grid-cols-1 mb-3 h-9">
          <input
            type="text"
            name="title"
            className="bg-slate-500 rounded-md shadow-lg p-2 text-slate-200"
            onChange={handlerChange}
            placeholder="title"
            value={task.title}
          />
        </div>

        <div className="grid grid-cols-1 mb-3 h-32">
          <textarea
            name="description"
            type="text"
            className="bg-slate-500 rounded-md shadow-lg p-2 text-slate-200 h-32"
            onChange={handlerChange}
            placeholder="Description"
            value={task.description}>
          </textarea>
        </div>

        <div className="grid grid-cols-1 mb-3">
          <select value={task.priority} onChange={handlerChange} name="priority" className="bg-slate-500 text-white rounded-md shadow-lg h-9 p-1" id="">
            <option value="" disabled selected hidden>Choose a priority</option>
            <option value="high" selected className="bg-red-900">High level</option>
            <option value="medium" className="bg-yellow-900">Medium level</option>
            <option value="low" className="bg-green-900">Low level</option>
          </select>
        </div>

        <button
          className="border-blue-700 hover:bg-blue-700 border-2 p-2 rounded-2xl w-1/2 text-white font-semibold">
          + Task
        </button>
      </form>
    </div>
  )
}