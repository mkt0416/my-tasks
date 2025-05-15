
'use client'
import { FormState, updateTask } from "@/actions/task";
import { TaskDocument } from "@/models/task";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

type Props = {
    task: TaskDocument;
};

const EditTaskForm = ({ task }: Props) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [dueDate, setDueDate] = useState(task.dueDate);
    const [isCompleted, setIsCompleted] = useState(task.isCompleted);

    const updateTaskWithId = updateTask.bind(null, task._id);
    const initialState: FormState = { error: '' };
    const [state, formAction] = useFormState(updateTaskWithId, initialState);

    const SubmitButton = () => {
        const { pending } = useFormStatus();
        return (
            <button
                disabled={pending}
                type="submit"
                className="mt-8 w-full py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 duration-300 disabled:bg-400"
            >
                Edit
            </button>
        );
    };

    return (
        <div className="mt-10 w-full max-w-sm mx-auto">
            <form action={formAction}>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium">タイトル</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block mt-2 py-1.5 px-2 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
                        type="text"
                        name="title"
                        id="title"
                    />
                </div>
                <div className="mt-6">
                    <label htmlFor="description" className="block text-sm font-medium">説明</label>
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block mt-2 py-1.5 px-2 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
                        type="text"
                        name="description"
                        id="description"
                    />
                </div>
                <div className="mt-6">
                    <label htmlFor="dueDate" className="block text-sm font-medium">期限</label>
                    <input
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="block mt-2 py-1.5 px-2 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
                        type="date"
                        name="dueDate"
                        id="dueDate"
                    />
                </div>
                <div className="mt-6 flex items-center gap-2">
                    <input
                        checked={isCompleted}
                        onChange={(e) => setIsCompleted(e.target.checked)}
                        className="w-4 h-4"
                        type="checkbox"
                        name="isCompleted"
                        id="isCompleted"
                    />
                    <label htmlFor="isCompleted" className="block text-sm font-medium">タスクを完了する</label>
                </div>
                <SubmitButton />
                {state.error !== '' && (
                    <p className="mt-2 text-red-500 text-sm">{state.error}</p>
                )}
            </form>
        </div>
    );
};

export default EditTaskForm;