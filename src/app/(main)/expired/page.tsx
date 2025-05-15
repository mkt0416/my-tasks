
import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";

const getExpiredTasks = async (): Promise<TaskDocument[]> => {
    const response = await fetch(`${process.env.API_URL}/tasks/expired`, {
        cache: 'no-store',
    });
    if (response.status !== 200) {
        throw new Error();
    }
    const data = await response.json();
    return data.tasks as TaskDocument[];
};

const ExpiredTask = async () => {
    const expiredTask = await getExpiredTasks();
    return (
        <div className="text-gray-900 p-8 overflow-y-auto">
            <header className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Expired Tasks</h1>
            </header>
            <div className="mt-8 flex flex-wrap gap-4">
                {expiredTask.map((task) => (
                    <TaskCard
                        key={task._id}
                        task={task}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExpiredTask;