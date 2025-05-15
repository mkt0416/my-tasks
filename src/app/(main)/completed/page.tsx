
import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";

const getCompletedTasks = async (): Promise<TaskDocument[]> => {
    const response = await fetch(`${process.env.API_URL}/tasks/completed`, {
        cache: 'no-store',
    });
    if (response.status !== 200) {
        throw new Error();
    }
    const data = await response.json();
    return data.tasks as TaskDocument[];
};

const CompletedTaskPage = async () => {
    const completedTask = await getCompletedTasks();

    return (
        <div className="text-gray-900 p-8 overflow-y-auto">
            <header className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Completed Tasks</h1>

            </header>
            <div className="mt-8 flex flex-wrap gap-4">
                {completedTask.map((task) => (
                    <TaskCard
                        key={task._id}
                        task={task}
                    />
                ))}
            </div>
        </div>
    );
};

export default CompletedTaskPage;