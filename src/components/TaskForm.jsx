import { useSelector } from "react-redux"


export default function TaskForm() {
  const stateTasks = useSelector(data => data.tasks);
  console.log(stateTasks);
  
    return (
    <div>TaskForm</div>
  )
}
