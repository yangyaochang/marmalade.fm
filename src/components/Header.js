import React, {Component} from 'react';
import {NavLink} from "../../node_modules/react-router-dom";

const Header = props => {
    return (
        <header className = 'black mb5 pt5 '>
            <h1 className = 'ttu tracked-mega anton tc mt0 mb3'>Marmalade.fm</h1>
            <ul className = 'list flex justify-center pl0'>
                <li className = 'mh2'>
                    {/* we use NavLink component to give us active styles when we're on the current page */}
                    {/* Using the exact prop makes sure it matches exactly */}
                    <NavLink exact to = '/marmalade.fm' className = 'nav-link link biryani-black f6 ttu gray'>What's hot</NavLink>
                </li>
                <li className = 'mh2'>
                    <NavLink to = '/marmalade.fm/archive' className = 'nav-link link biryani-black f6 ttu gray'>Archive</NavLink>
                </li>
                <li className = 'mh2'>
                    <NavLink to = '/marmalade.fm/about' className = 'nav-link link biryani-black f6 ttu gray'>About</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header
