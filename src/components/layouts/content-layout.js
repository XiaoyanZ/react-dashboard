import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import FormInputContainer from '../containers/form-input-container';
import FormLayoutContainer from '../containers/form-layout-container';

class ContentLayout extends Component {

    render(){
        return(
            <content>
                <Switch>
                    <Redirect exact from='/forms' to='/forms/form-input' />
                    <Route exact path='/forms/form-input' component={FormInputContainer} />
                    <Route exact path='/forms/form-layout' component={FormLayoutContainer} />
                </Switch>
            </content>
        );
    }
}

export default ContentLayout;