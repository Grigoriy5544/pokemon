import React from 'react';
// import SimpleBar from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';
import './Main.css';
// import contenImg from '../../images/content-img.svg';
import Header from '../Header/Header';
import Pokemon from '../Pokemon/Pokemon';
import CardList from '../CardList/CardList';
import Footer from '../Footer/Footer';



function Main() {
    return (
        <>
        <Header/>
        <main className="content">
            <Pokemon/>
            <CardList/>
            <CardList/>
        </main>
        <Footer/>
        </>
    )
}

export default Main;