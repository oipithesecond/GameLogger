import React from 'react';

function Footer(){
    const footerStyles = {
        backgroundColor:"#3a0173",
        color:"white",
    }
    return(
        <footer style={footerStyles}>
            <p>&copy; {new Date().getFullYear()} GameLogger</p>
            <p>Home<a href="#"></a></p> 
            <p>For support and feedback <a href="https://discord.gg/JYr3UefQay">click here</a></p>
        </footer>
    )
}

export default Footer