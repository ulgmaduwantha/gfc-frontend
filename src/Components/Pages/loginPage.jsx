import { Link } from "react-router-dom"
import "./LoginPage.css"

export default function(){
    return(
        <div className="w-[500px] h-[445px] border border-black relative">
            <div className="w-36 h-36 bg-blue-600 absolute right-[10px] bottom-[10px]">

            </div>
            <div className="w-36 h-36 bg-yellow-600 fixed right-[10px] bottom-[10px]">

            </div>
            {/* <h1>Login Page</h1>
            <input type="text" placeholder="Enter your Username" />
            <input type = "password"  placeholder="Enter your password"></input>
            <button className="bg-yellow-500 m-8 border border-black">Login</button>
            <Link to="/">back to home Page</Link> */}
        </div>
    )
}