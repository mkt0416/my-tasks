
import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";
import { TaskDocument } from "@/models/task";

type Props = {
    params: {
        id: string;
    };
};

const getTask = async (id: string): Promise<TaskDocument> => {
    const response = await fetch(`${process.env.API_URL}/tasks/${id}`, {
        cache: 'no-store',
    });
    const data = await response.json();
    return data.task as TaskDocument;
};

const EditTaskPage = async ({ params }: Props) => {
    const id = params.id;
    const task = await getTask(id);
    return (
        <div className="flex flex-col items-center py-20">
            <h1 className="text-2xl font-bold">Edit Task</h1>
            <EditTaskForm task={task} />
        </div>
    );
};

export default EditTaskPage;