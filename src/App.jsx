import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import Gamescard from './Gamescard';

function App() {
    return (
        <Router>
            <Header isLoggedIn={true} username="oipi" />
            
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <>
                            <Gamescard name="Watch_Dogs" desc="In today's hyper-connected world, Chicago operates under ctOS, the most advanced computer network in America." />
                            <Gamescard name="Witcher 3" desc="You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will." />
                            <Gamescard />
                        </>
                    } 
                />
                
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            
            <Footer />
        </Router>
    );
}

export default App;
