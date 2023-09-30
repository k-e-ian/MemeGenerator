import React from "react";
import trollFace from "../assets/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img className="header--image" src={trollFace} alt="troll-face"></img>
            <h2 className="header--title" >Meme Generator Header</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}