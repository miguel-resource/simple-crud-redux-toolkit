//material

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { editTask, addTask } from './../services/tasks/taskSlice'
import { v4 as uuid } from 'uuid';

export default function TaskForm() {

  const [task, setTask] = useState({})
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect(() => { }, [

  ]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (params.id) {

    } else {
      const date = new Date()
      dispatch(addTask({
        ...task,
        id: uuid(),
        date: date.getDate("es-MX")
      }))
    }
    navigate("/")
  }

  const handlerChange = (e) => {

    if (params.id) {
      
    } else {
      setTask({
        ...task,
        [e.target.name]: e.target.value
      })
    }
  }

  return (
    <div
      className="bg-gray-800 p-3 mx-auto w-7/12 rounded-xl mb-72">

      <form onSubmit={handlerSubmit}>
        <div className="grid grid-cols-1 mb-3 h-9">
          <input
            type="text"
            name="title"
            className="bg-slate-500 rounded-md shadow-lg p-1 text-slate-200"
            onChange={handlerChange}
            placeholder="title"kk
          />
        </div>

        <div className="grid grid-cols-1 mb-3 h-32">
          <textarea
            name="description"
            type="text"
            className="bg-slate-500 r nhadow-lg p-1 text-slate-200 h-32"
            onChange={handlerChange}
            placeholder="Description"></textarea>
        </div>

        <div className="grid grid-cols-1 mb-3">
          <select onChange={handlerChange} name="priority" className="bg-slate-500 text-white rounded-md shadow-lg h-9 p-1" id="">
            <option value="" disabled selected hidden>Choose a drink</option>
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