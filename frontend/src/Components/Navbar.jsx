import React from "react";
import './Navbar.css'
import Order from "./Order";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/order" className={({ isActive }) => isActive ? "active-link" : ""}>
                        Order
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/vip" className={({ isActive }) => isActive ? 'active-link' : ""}>Vip</NavLink>
                </li>
                <li>
                    <NavLink to="/team" className={({ isActive }) => isActive ? 'active-link' : ""}>Team</NavLink>
                </li>
                <li>
                    <NavLink to="/my" className={({ isActive }) => isActive ? 'active-link' : ""}>Profile</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Navbar;