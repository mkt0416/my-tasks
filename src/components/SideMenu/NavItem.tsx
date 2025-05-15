
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    label: string;
    link: string;
    icon: React.ReactNode;
};

const NavItem = ({ label, link, icon }: Props) => {
    const pathName = usePathname();

    return (
        <Link href={link} className={`${pathName === link && 'bg-gray-600 border-r-4 border-green-500'}
        flex items-center gap-1 p-4 hover:bg-gray-700 duration-300`}>
            <span>{icon}</span>
            <h2>{label}</h2>
        </Link>
    );
};

export default NavItem;