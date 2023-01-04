import React from "react";
import "./side-nav.style.css";

function SideNav() {
    return (
        <div>
            <ul className="nav">
                <li className="nav__list">Dashboard</li>
                <li className="nav__list">List</li>
                <li className="nav__list">Profile</li>
            </ul>
            <div></div>
        </div>
    );
}

export default SideNav;