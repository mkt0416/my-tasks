
import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";
import Link from "next/link";
import { MdAddTask } from "react-icons/md";

const getAllTasks = async (): Promise<TaskDocument[]> => {
    const response = await fetch(`${process.env.API_URL}/tasks`, {
        cache: 'no-store',
    });
    if (response.status !== 200) {
        throw new Error();
    }
    const data = await response.json();
    return data.tasks as TaskDocument[];
};

const MainPage = async () => {
    const allTasks = await getAllTasks();

    return (
        <div className="text-gray-900 p-8 overflow-y-auto">
            <header className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">All Tasks</h1>
                <Link
                    className="flex items-center gap-1 bg-gray-800 text-white py-2 px-4 rounded-full
                    hover:bg-gray-700 duration-300"
                    href={'/new'}>
                    <MdAddTask />
                    <p>Add A Task</p>
                </Link>
            </header>
            <div className="mt-8 flex flex-wrap gap-4">
                {allTasks.map((task) => (
                    <TaskCard
                        key={task._id}
                        task={task}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainPage;