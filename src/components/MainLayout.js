import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Practice from './Practice';
import Contests from './Contest/Contests';
import About from './About';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <BrowserRouter>
                <Route exact path="/" component={HomePage} />
                <Route path="/practice" component={Practice} />
                <Route path="/contests" component={Contests} />
                <Route path="/about" component={About} />
            </BrowserRouter>
        </div>
    );
}

export default MainLayout;