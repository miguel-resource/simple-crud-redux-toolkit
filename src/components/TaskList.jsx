import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { Link } from 'react-router-dom';

export default function TaskList() {

    const tasks = useSelector(data => data.tasks);

    return (
        /* low priority */
        <>
            <Link
                to="/create-task"
                className="bg-slate-300 p-3 rounded-xl block mb-3 w-1/5 text-center hover:bg-slate-50">
                Create
            </Link>
            <div className="bg-emerald-500/50 rounded-lg p-3 mb-3">
                <h3 className="font-mono  text-slate-200 text-xl">Low priority</h3>
                {tasks.map(task => {
                    if (task.priority === "low") {
                        return (
                            <TaskItem
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                date={task.date}
                                description={task.description}
                                priority={task.priority}
                                completed={task.completed}>
                            </TaskItem>
                        )
                    }
                })}
            </div>

            {/* medium priority */}
            <div className="bg-yellow-500/50 rounded-lg p-3 mb-3">
                <h3 className="font-mono  text-slate-200 text-xl">Medium priority</h3>
                {tasks.map(task => {
                    if (task.priority === "medium") {
                        return (
                            <TaskItem
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                date={task.date}
                                description={task.description}
                                priority={task.priority}
                                completed={task.completed}>
                            </TaskItem>
                        )
                    } else {
                        return
                    }
                })}
            </div>

            {/* medium priority */}
            <div className="bg-red-500/50 rounded-lg p-3">
                <h3 className="font-mono  text-slate-200 text-xl">High priority</h3>
                {tasks.map(task => {
                    if (task.priority === "high") {
                        return (
                            <TaskItem
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                date={task.date}
                                description={task.description}
                                priority={task.priority}
                                completed={task.completed}>
                            </TaskItem>
                        )
                    }
                })}
            </div>

        </>
    )
}
