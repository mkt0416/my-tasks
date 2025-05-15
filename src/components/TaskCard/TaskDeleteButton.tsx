
'use client'
import { deleteTask, FormState } from "@/actions/task";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FaTrashAlt } from "react-icons/fa";

type Props = {
    id: string;
};

const TaskDeleteButton = ({ id }: Props) => {
    const deleteTaskWithId = deleteTask.bind(null, id);
    const initialState: FormState = { error: '' };
    const [state, formAction] = useFormState(deleteTaskWithId, initialState);

    useEffect(() => {
        if (state && state.error !== '') {
            alert(state.error);
        }
    }, [state]);

    const SubmitButton = () => {
        const { pending } = useFormStatus();
        return (
            <button
                disabled={pending}
                type="submit"
                className="hover:text-gray-600 duration-300"
            >
                <FaTrashAlt className="size-5" />
            </button>
        );
    };

    return (
        <form action={formAction}>
            <SubmitButton />
        </form>
    );
};

export default TaskDeleteButton;