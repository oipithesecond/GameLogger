import React from 'react';
import propTypes from 'prop-types';
import gameposter from './assets/GL_watchdogsposter.jpeg'
import PropTypes from 'prop-types';

function Gamescard(props){
    const cardStyles = {
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
    const posterStyles = {
        maxWidth: "60%",
        height: "auto",
        marginBottom: "10px",
    }
    const titleStyles = {
        fontFamily: "Arial, Helvetica, sans-serif",
        margin: "0",
    }
    return(
        <div style={cardStyles}>
            <img style={posterStyles} src={gameposter} alt="game banner"></img>
            <h2 style={titleStyles} >{props.name}</h2>
            <p>{props.desc}</p>
        </div>
    )
}

Gamescard.propTypes = {
    name: propTypes.string,
    desc: propTypes.string, 
}
Gamescard.defaultProps = {
    name: "guest",
    desc: "guest description",
}
export default Gamescard