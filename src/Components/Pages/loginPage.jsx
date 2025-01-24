import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-96 p-6 bg-white rounded-lg shadow-md border border-gray-200">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Login Page</h1>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Enter your Username"
                        className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Login
                </button>

                <div className="mt-4 text-center">
                    <Link
                        to="/"
                        className="text-blue-500 hover:underline"
                    >
                        Back to Home Page
                    </Link>
                </div>
            </div>
        </div>
    );
}
