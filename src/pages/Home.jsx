import React from 'react';
import {Header, Navbar, Searchbar, DailyWOD, Footer} from '../_partials';

function Home() {
    return(
        <div>
            <Navbar />
            <Header />
            <Searchbar />
            <DailyWOD />
            <Footer />
        </div>
    )
}

export {Home};
