
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-8xl font-bold">404</h1>
            <p className="text-4xl font-semibold">Page Not Found</p>
            <Link href={'/'} className="mt-4 text-xl text-blue-600 hover:underline">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFoundPage;