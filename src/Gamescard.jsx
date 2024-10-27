import React from 'react';
import gamebanner from './assets/GL_watchdogs1.jpg'
import gameposter from './assets/GL_watchdogsposter.jpeg'

function Gamescard(){
    return(
        <div className="card">
            <img className="gameposter" src={gameposter} alt="game banner"></img>
            <h2 className="gametitle">Watch_Dogs</h2>
            <p>In today's hyper-connected world, Chicago operates under ctOS, the most advanced computer network in America. </p>
        </div>
    )
}

export default Gamescard