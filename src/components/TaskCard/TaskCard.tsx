
import { TaskDocument } from "@/models/task";
import TaskDeleteButton from "./TaskDeleteButton";
import TaskEditButton from "./TaskEditButton";

type Props = {
    task: TaskDocument;
};

const TaskCard = ({ task }: Props) => {
    return (
        <div className="w-64 h-52 bg-white p-4 rounded-md shadow-md flex flex-col justify-between">
            <header>
                <h2 className="font-semibold">{task.title}</h2>
                <p className="mt-1 text-sm line-clamp-3">{task.description}</p>
            </header>
            <div>
                <div className="text-sm">{task.dueDate}</div>
                <div className="flex items-center justify-between">
                    <div className={`mt-1 w-24 text-sm text-white text-center py-1 px-2 rounded-full
                        ${task.isCompleted ? 'bg-green-500' : 'bg-red-500'}`}>{task.isCompleted ? 'completed' : 'incompleted'}</div>
                    <div className="flex gap-4">
                        <TaskEditButton id={task._id} />
                        <TaskDeleteButton id={task._id} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;