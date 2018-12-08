import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import CompanyProfile from '../view/companyProfile';
import IssueShares from '../view/issueShares';
import InvestmentListing from '../view/investmentListing';
import PendingInvestmentListing from '../view/pendingInvestmentListing';
import AddShareClass from '../view/addShareClass';
import Login from '../view/login';
import Logout from '../view/logout';

import '../../../css/components/containers/pageSection/main.scss';

export default function Main(props) {
    console.log(props.jwt);
    if(!props.jwt) {
        return(
            <main className="main-container">
                <Login />
            </main>
        )
    } else {
        return (
            <main className="main-container">
                <Switch>
                    <Route
                        exact path='/'
                        component={CompanyProfile}
                    />
                    <Route
                        exact path='/issueShares'
                        component={IssueShares}
                    />
                    <Route
                        exact path='/issueShares/:investmentId'
                        component={IssueShares}
                    />
                    <Route
                        exact path='/investmentListing'
                        component={InvestmentListing}
                    />
                    <Route
                        exact path='/pending'
                        component={PendingInvestmentListing}
                    />
                    <Route
                        exact path='/addShareClass'
                        component={AddShareClass}
                    />
                    <Route
                        exact path='/login'
                        component={Login}
                    />
                    <Route 
                        exact path='/logout'
                        component={Logout}
                    />
                </Switch>
            </main>
        );
    }
}

