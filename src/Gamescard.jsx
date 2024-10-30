import React from 'react';
import gamebanner from './assets/GL_watchdogs1.jpg'
import gameposter from './assets/GL_watchdogsposter.jpeg'

function Gamescard(){
    const styles = {
        border: "2px solid white",
        borderRadius: "10px",
        boxShadow: "5px 5px 5px hsla(0, 0%, 0%, 0.406)",
        color: "hsl(0, 0%, 55%)",
        padding: "20px",
        margin: "10px",
        textAlign: "left",
        maxWidth:"250px",
        display:"inline-block",
    }
    return(
        <div className="card" style={styles}>
            <img className="gameposter" src={gameposter} alt="game banner"></img>
            <h2 className="gametitle">Watch_Dogs</h2>
            <p>In today's hyper-connected world, Chicago operates under ctOS, the most advanced computer network in America. </p>
        </div>
    )
}

export default Gamescard