import React from 'react';

function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} GameLogger</p>
            <p>Home<a href="#"></a></p> 
            <p>For support and feedback <a href="https://discord.gg/JYr3UefQay">click here</a></p>
        </footer>
    )
}

export default Footer