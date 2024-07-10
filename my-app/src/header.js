import React from "react"
import './App.css'
export default function HeaderItems (){
    // function handleEvent(){
    //         alert("you clicked me")
    // }
    return (
        <>
        <div className="Header">
             <h1>Beautiful Unicorn</h1>
             <p> software Engineer</p>

        </div>
        <p></p>
        <div className="Sub-Header">
            <h2>About Me</h2>
        </div>
        <p className="Sub-Header">I'm a passionate software engineer who loves working with HTML, CSS, JavaScript, and more.</p>

        <div>
            <h3 className="Sub-Header">Interest</h3>
        </div>
        <p className="List"> 
            <li>Web Development</li>
            <li>Coding</li>
            <li>Designing User Interfaces</li>
        </p>

         
        
        
        
        </>
    )
}