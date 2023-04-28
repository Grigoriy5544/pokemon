import React from 'react';
// import Header from '../Header/Header';
import {Routes, Route} from 'react-router-dom';
import Main from '../Main/Main';
import Coaches from '../Coaches/Coaches';
// import Footer from '../Footer/Footer';
import '../../vendor/fonts/fonts.css';
import './App.css';
import PockemonProfile from "../pokemonProfile/PockemonProfile";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/coaches" element={<Coaches/>}/>
                <Route path="/profile/:id" element={<PockemonProfile/>}/>
            </Routes>
        </div>
    );
}

export default App;
