
import NavList from "./NavList";

const SideMenu = () => {
    return (
        <div className="w-56 bg-gray-800 text-white pt-8">
            <div>
                <h1 className="text-2xl font-bold px-4">My Tasks</h1>
                <NavList />
            </div>
        </div>
    );
};

export default SideMenu;