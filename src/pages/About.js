import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About() {
    const [user,setUser] = useState("mario")

    if(!user){
        return <Navigate to="/" replace={true}/>
    }

    return(
        <div className="about">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus voluptate quis porro? Provident incidunt consectetur libero architecto quasi? Sunt error nam laudantium. Quos nulla hic sed nostrum maiores a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus voluptate quis porro? Provident incidunt consectetur libero architecto quasi? Sunt error nam laudantium. Quos nulla hic sed nostrum maiores a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus voluptate quis porro? Provident incidunt consectetur libero architecto quasi? Sunt error nam laudantium. Quos nulla hic sed nostrum maiores a.</p>

            <button onClick={()=>setUser(null)}>Logout</button>
        </div>
    )
}