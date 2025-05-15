
'use client'
import { createTask, FormState } from "@/actions/task";
import { useFormState, useFormStatus } from "react-dom";

const NewTaskForm = () => {
    const initialState: FormState = { error: '' };
    const [state, formAction] = useFormState(createTask, initialState);

    const SubmitButton = () => {
        const { pending } = useFormStatus();
        return (
            <button
                disabled={pending}
                type="submit"
                className="mt-8 w-full py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 duration-300 disabled:bg-gray-400"
            >
                Create
            </button>
        );
    };

    return (
        <div className="mt-10 w-full max-w-sm mx-auto">
            <form action={formAction}>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium">タイトル</label>
                    <input
                        className="block mt-2 py-1.5 px-2 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
                        type="text"
                        name="title"
                        id="title"
                    />
                </div>
                <div className="mt-6">
                    <label htmlFor="description" className="block text-sm font-medium">説明</label>
                    <input
                        className="block mt-2 py-1.5 px-2 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
                        type="text"
                        name="description"
                        id="description"
                    />
                </div>
                <div className="mt-6">
                    <label htmlFor="dueDate" className="block text-sm font-medium">期限</label>
                    <input
                        className="block mt-2 py-1.5 px-2 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
                        type="date"
                        name="dueDate"
                        id="dueDate"
                    />
                </div>
                <SubmitButton />
                {state.error !== '' && (
                    <p className="mt-2 text-red-500 text-sm">{state.error}</p>
                )}
            </form>
        </div>
    );
};

export default NewTaskForm;