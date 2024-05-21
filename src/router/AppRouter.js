import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom';

import { AuthContext } from '../components/auth/context/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginPage } from '../components/auth/LoginPage';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch> 
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginPage } 
                        isAuthenticated={ user.logged }
                    />
                    
                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ user.logged }
                    />
                </Switch>
            </div>
        </Router>
    )
}
