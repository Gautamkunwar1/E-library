import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[#c1f8c68a] px-4">
            <h1 className="text-7xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-6 text-center max-w-md">
                Sorry, the page you're looking for doesn't exist.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
            >
                Go Home
            </Link>
        </div>
    );
}

export default NotFound;
