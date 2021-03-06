import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    HOME
                </Link>
            </li>
            <li className="nav-item">
                <Link 
                    to="/saved"
                    className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                        Saved
                    </Link>
            </li>
            {/* <li className="nav-item">
                <Link 
                    to="/discover"
                    className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}>
                        Discover
                    </Link>
            </li>
            <li className="nav-item">
                <Link 
                    to="/search"
                    className={window.location.pathname === "/nav" ? "nav-link active" : "nav-link"}>
                        Search
                    </Link>
            </li> */}
        </ul>
    )
}

export default Nav;