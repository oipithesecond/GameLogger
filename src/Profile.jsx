import React, { useState } from 'react'

function Profile(){
    const[hasPlayed, setPlayed] = useState(false)
    const[hoursPlayed, setHours] = useState(0)

    const togglePlayedStatus = () => {
        setPlayed(!hasPlayed)
    }
    const updateHours = () => {
        setHours(hoursPlayed + 1)
    }
    
    return(
        <>
            <p>game: {hasPlayed ? "Yes":"No"}</p>
            <button onClick = {togglePlayedStatus}>Played this game?</button>
            <p>hours: {hoursPlayed}</p>
            <button onClick = {updateHours}>Hours incrementer</button>
        </>
    )
}
export default Profile