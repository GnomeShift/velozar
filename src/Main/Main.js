import React from 'react';
import About from './About/About';
import Offer from "./Offer/Offer";
import Advantages from "./Advantages/Advantages";
import Service from "./Service/Service";
import Rental from "./Rental/Rental";

const Main = () => {
    return (
        <main>
            <About />
            <Offer />
            <Advantages />
            <Service />
            <Rental />
        </main>
    )
}

export default Main;