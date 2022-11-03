import { useDispatch } from "react-redux";
import { deleteTask } from './../services/tasks/taskSlice';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import IconButton from "@mui/material/IconButton";
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

export default function TaskItem({ title, id, date, completed, description }) {

  const dispatch = useDispatch()

  const handlerDelete = id => {
    dispatch(deleteTask(id))
  }

  return (
    <div
      className="bg-zinc-800 rounded-lg w-10/12 mx-auto mt-3 p-2 shadow-md shadow-gray-900	">

      <div className="grid grid-cols-2">
        <h3 className="text-slate-200  tracking-widest">
          {title}
        </h3>

        <IconButton onClick={() => handlerDelete(id)} className="p-0 float-left mx-44 w-9 text-white hover:text-red-600 ease-in-out">
          <RemoveCircleOutlineIcon />
        </IconButton>
      </div>

      <div className="mt-1 text-xs grid grid-cols-2 gap-1 w-1/2">
        <span className="block text-slate-400 tracking-widest text-center "> {date} </span>
        {completed ?
          <h3
            className="text-green-300 border-green-300 border-2 text-center rounded-lg">
            <DoneIcon className="text-sm mr-1" />
            Completed
          </h3> :
          <h3
            className="text-red-300 border-red-300 border-2 text-center rounded-lg">
            <ClearIcon className="text-sm mr-1" />
            Incompleted
          </h3>
        }
      </div>

      <div
        className="text-sm text-slate-300 tracking-wide">
        {description}
      </div>

      <Link
        className="block text-slate-300 bg-zinc-700 rounded-lg w-1/12 text-center p-1 mt-10 hover:bg-zinc-600 ease-in-out"
        to={`/edit-task/${id}`}>
        <EditIcon />
      </Link>

    </div>
  )
}