import { useSelector } from 'react-redux';
import TaskItem  from './TaskItem'

export default function TaskList() {

    const tasks = useSelector(data => data.tasks);

    return (
        <div>
            {tasks.map(task => (
               <TaskItem key={task.id}></TaskItem> 
            ))}
        </div>
    )
}
