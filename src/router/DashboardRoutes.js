import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Dashboard } from '../components/dashboard/Dashboard';

export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/dashboard" component={ Dashboard } />
                    <Redirect to="/dashboard" />
                </Switch>
            </div>


        </>
    )
}
