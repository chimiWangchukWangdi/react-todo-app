import React from "react";
import "./sideNav.css";
import { Link } from "react-router-dom";

function SideNav() {
    return (
        <div>
            <ul className="nav">
                <Link to="dashboard"><li className="nav__list">Dashboard</li></Link>
                <Link to="list"><li className="nav__list">List</li></Link>
                <Link to="profile"><li className="nav__list">Profile</li></Link>
            </ul>
        </div>
    );
}

export default SideNav;