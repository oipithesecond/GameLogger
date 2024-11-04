import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    const headerStyles = {
        backgroundColor: "rgb(28, 27, 27)",
        color: "#a35ff5",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    };
    const navStyles = {
        display: "flex",
        listStyleType: "none",
        gap: "20px",
        margin: 0,
        padding: 0
    };
    const linkStyles = {
        color: "#fff",
        textDecoration: "none",
        fontSize: "16px"
    };

    return (
        <header style={headerStyles}>
            <h1>GameLogger</h1>
            <nav>
                <ul style={navStyles}>
                    <li><Link to="/games" style={linkStyles}>Games</Link></li>
                    <li><Link to="/new-releases" style={linkStyles}>New Releases</Link></li>
                    {
                        props.isLoggedIn
                        ? <li><Link to="/profile" style={linkStyles}>{props.username}</Link></li>
                        : <li><Link to="/login" style={linkStyles}>Profile</Link></li>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;
