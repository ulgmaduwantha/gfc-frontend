import { useState } from "react"
import "./Testing.css"

export default function Testing(){
    
    const [count,setCount] = useState(0)

    const [name,setName] = useState("iphones")
 
    function increment(){
        console.log("incrementing")
        setCount(count + 1)
    }

    function decrement(){
        console.log("decrementing")
        if(count > 0){
        setCount(count - 1)
        }
    }

    function changeName(value){
        setName(value)
    }


    
    return (
        
        <div className="background">
            <h1>{name}</h1>
        <button className ="value" onClick={decrement}>-</button>
        <span>{count}</span>
        <button className="value" onClick={increment}>+</button>
        
            <div className="button-panel">
            <button onClick={()=>changeName("Iphone")}>Iphone</button>
            <button onClick={()=>changeName("Laptop")}>Laptop</button>
            <button onClick={()=>changeName("Charger")}>Charger</button>  
            </div>

        </div>
    )
}

