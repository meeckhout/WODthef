import React from 'react';
import {Header, Navbar, DailyWOD, Footer} from '../_partials';

function Home() {
    return(
        <div>
            <Navbar />
            <Header />
            <DailyWOD />
            <Footer />
        </div>
    )
}

export {Home};
