import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
    const navStyle = {
        color: 'white'
    }

    return (
        <nav className="nav-text">
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/home'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/haikus'>
                    <li>Haiku Genres</li>
                </Link>
                <Link style={navStyle} to='/comedyHaikus'>
                    <li>Comedy Haikus</li>
                </Link>
                <Link style={navStyle} to='/tragedyHaikus'>
                    <li>Tragedy Haikus</li>
                </Link>
            </ul>
        </nav>
    )
}