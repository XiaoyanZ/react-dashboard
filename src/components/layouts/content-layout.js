import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import FormInputContainer from '../containers/form-input-container';
import FormLayoutContainer from '../containers/form-layout-container';
import TableContainer from '../containers/table-container';
import ChartsContainer from '../containers/charts-container'

class ContentLayout extends Component {

    render(){
        return(
                <Switch>
                    <Redirect exact from='/' to='/forms/form-input' />
                    <Redirect exact from='/forms' to='/forms/form-input' />
                    <Route exact path='/forms/form-input' component={FormInputContainer} />
                    <Route exact path='/forms/form-layout' component={FormLayoutContainer} />
                    <Route exact path='/tables' component={ TableContainer } />
                    <Route exact path='/charts' component={ ChartsContainer } />
                    
                </Switch>
        );
    }
}

export default ContentLayout;