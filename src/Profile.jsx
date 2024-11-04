import React, { useEffect, useState } from 'react'

function Profile(){
    const[hasPlayed, setPlayed] = useState(false)
    const[hoursPlayed, setHours] = useState(0)

    useEffect(() => {
        document.title = `Hours: ${hoursPlayed}`
        return() => {
            document.title = "GameLogger" 
        }
    }, [hoursPlayed])

    const togglePlayedStatus = () => {
        setPlayed(!hasPlayed)
    }
    const updateHours = () => {
        setHours(h => h+1)
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