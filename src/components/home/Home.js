import React from 'react';
import './Home.css'
import SideBar from './SideBar';
import HomeScreen from './HomeScreen';

const Home = () => {
    return (
        <section className="home">
            <SideBar />
            <HomeScreen/>
        </section>
    );
}

export default Home;
