import React from "react";
import "./homePage.css"; // Assuming the CSS is in App.css
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";

function Homepage() {
    return (
        <div>
            <header>
                <h1>Welcome to My Homepage</h1>
            </header>

            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>

            <div className="container">
                <h2>About Us</h2>
                <p>
                    We are dedicated to providing the best services to our customers. Explore our website
                    to learn more about what we offer and how we can help you.
                </p>
                <Link to='/login'>login</Link>
            </div>

            <footer>
                &copy; 2025 My Homepage. All rights reserved.
            </footer>

        </div>
    );
}

export default Homepage;
