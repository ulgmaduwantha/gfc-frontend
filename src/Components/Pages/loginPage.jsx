import { Link } from "react-router-dom"
import "./LoginPage.css"

export default function(){
    return(
        <div>
            <h1>Login Page</h1>
            <input type="text" placeholder="Enter your Username" />
            <input type = "password" placeholder="Enter your password"></input>
            <button>Login</button>
            <Link to="/">back to home Page</Link>
        </div>
    )
}