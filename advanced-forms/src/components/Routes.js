import React from 'react';
import Home from "./Home";
import Inventory from "./Inventory";
import Report from "./Report";
import SampleSurvey from "./SampleSurvey";
import {BrowserRouter,Switch,Route, NavLink} from 'react-router-dom';
const Routes = () =>{
    return(
        <BrowserRouter>
            <h3>
                <div>
                    <NavLink to='/'>Home</NavLink>{' '}
                </div>
                <div>
                    <NavLink to='/survey'>Surveys</NavLink>
                </div>
                <div>
                    <NavLink to='/inventory'>Inventory</NavLink>
                </div>
                <div>
                    <NavLink to='/report'>Report</NavLink>
                </div>

            </h3>

            <Switch>
                <Route exact path = '/'>
                    <Home />
                </Route>
                <Route path ='/survey'>
                    <SampleSurvey />
                </Route>
                <Route path ='/inventory'>
                    <Inventory />
                </Route>
                <Route path ='/report'>
                    <Report />
                </Route>
                <Route>
                    <h2>404: Page Not Found</h2>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
