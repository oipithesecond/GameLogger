import React from 'react';

function Header(props){
    const headerStyles = {
        backgroundColor: "rgb(28, 27, 27)",
        color: "#a35ff5",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
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
    return(
        <header style={headerStyles}>
            <h1>GameLogger</h1>
            <nav>
                <ul style={navStyles}>
                    <li><a href="#" style={linkStyles}>Games</a></li>
                    <li><a href="#" style={linkStyles}>New Releases</a></li>
                    {
                        props.isLoggedIn
                        ?<li><a href="#" style={linkStyles}>{props.username}</a></li>
                        :<li><a href="#" style={linkStyles}>Profile</a></li>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header