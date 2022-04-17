import React from 'react';
import Footer from '../../Compunant/Footer/Footer';
import Services from '../Services/Services';
import HomeBanner from './HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Services></Services>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;