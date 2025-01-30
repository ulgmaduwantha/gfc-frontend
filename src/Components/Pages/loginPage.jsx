import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function LoginPage() {

    const [email,setEmail] = useState("Your Email");
    const [password,setPassword] = useState("Your Password");

    function login(){
        axios.post("http://localhost:3000/api/users/login",{
            email:email,
            password:password
        }).then(
            (res)=>{
                console.log(res)
                if(res.data.user == null){
                    toast.error(res.data.messege)
                    return
                }
                toast.success("Successfully Logged in")
                localStorage.setItem("token",res.data.token)
                if(res.data.user.type == "admin"){
                    window.location.href = "/admin"
                    
                }else{
                    window.location.href = "/"
                }
            }
        )
    }

    return (
        <div className="flex justify-center items-center w-full h-screen bg-red-900">
            <div className="flex flex-col justify-center items-center w-[450px] h-[350px] bg-blue-600">
                <img src="/Logo.jpg" className="rounded-full h-[100px] w-[100px]" />
                <span>Email</span>
                <input defaultValue={email} onChange={
                    (e) =>{
                        setEmail(e.target.value)
                    }
                }/>
                <span>Password</span>
                <input defaultValue={password} type="password" onChange={
                    (e) =>{
                        setPassword(e.target.value)
                    }
                }/>
                <button onClick={login} className="bg-green-500 hover:bg-green-700 text-white font-bold py-">Login</button>
            </div>

        </div>
    );
}
