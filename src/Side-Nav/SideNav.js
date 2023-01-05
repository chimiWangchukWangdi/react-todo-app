import React from "react";
import "./sideNav.css";
import { Link } from "react-router-dom";

function SideNav() {
    return (
        <div>
            <ul className="nav">
                <Link to="/"><li className="nav__list">Dashboard</li></Link>
                <Link to="TaskManager"><li className="nav__list">List</li></Link>
                <Link to="Profile"><li className="nav__list">Profile</li></Link>
            </ul>
            <div></div>
        </div>
    );
}

export default SideNav;