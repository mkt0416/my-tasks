
import NewTaskForm from "@/components/NewTaskForm/NewTaskForm";

const NewTaskPage = () => {
    return (
        <div className="flex flex-col items-center py-20">
            <h1 className="text-2xl font-bold">Create New Task</h1>
            <NewTaskForm />
        </div>
    );
};

export default NewTaskPage;