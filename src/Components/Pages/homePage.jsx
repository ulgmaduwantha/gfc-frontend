import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";

function Homepage() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <header className="bg-blue-500 text-white py-6 text-center">
                <h1 className="text-3xl font-bold">Welcome to My Homepage</h1>
            </header>

            <nav className="bg-blue-700 text-white py-4">
                <div className="flex justify-center space-x-6">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Services</a>
                    <a href="#" className="hover:underline">Contact</a>
                </div>
            </nav>

            <div className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                    We are dedicated to providing the best services to our customers. Explore our website
                    to learn more about what we offer and how we can help you.
                </p>
                <Link to='/login' className="text-blue-500 hover:underline font-medium">Login</Link>
            </div>

            <footer className="bg-gray-200 text-gray-600 text-center py-4 mt-auto">
                &copy; 2025 My Homepage. All rights reserved.
            </footer>
        </div>
    );
}

export default Homepage;
