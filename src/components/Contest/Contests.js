import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContestsHome from './ContestsHome';
import ContestHome from './ContestHome';
import ContestProblem from './ContestProblem';
import ContestProblems from './ContestProblems';
import Navbar from '../Navbar';

const Contests = () => {
    return (
        <div className="contests-container">
            <div className="contests">
                <Navbar />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/contests/" component={ContestsHome} />
                        <Route exact path="/contests/:contestId/" component={ContestHome} />
                        <Route exact path="/contests/:contestid/problems/" component={ContestProblems} />
                        <Route exact path="/contests/:contestid/problems/:problemId/" component={ContestProblem} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default Contests;