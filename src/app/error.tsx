
'use client'
import Link from "next/link";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-8xl font-bold">Error</h1>
            <p className="text-4xl font-semibold">Error expected occured</p>
            <Link href={'/'} className="mt-4 text-xl text-blue-600 hover:underline">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;