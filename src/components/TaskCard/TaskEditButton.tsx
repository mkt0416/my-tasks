
import Link from "next/link";
import { FaPen } from "react-icons/fa";

type Props = {
    id: string;
};

const TaskEditButton = ({ id }: Props) => {
    return (
        <Link href={`/edit/${id}`} className="hover:text-gray-600 duration-300">
            <FaPen className="size-5" />
        </Link>
    );
};

export default TaskEditButton;