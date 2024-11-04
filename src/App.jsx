    import React from 'react'
    import Header from './Header.jsx'
    import Footer from './Footer.jsx'
    import Gamescard from './Gamescard.jsx'

    function App(){
        return(
            <>
                <Header isLoggedIn={true} username="oipi"/>
                <Gamescard name="Watch_Dogs" desc="In today's hyper-connected world, Chicago operates under ctOS, the most advanced computer network in America. "/>
                <Gamescard name="Witcher 3" desc="You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will."/>
                <Gamescard/>
                <Footer/>
            </>
        )
    };

    export default App  