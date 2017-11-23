import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Radium from 'radium';
import { Segment} from 'semantic-ui-react';

import FormsContainer from '../containers/forms-container';
import TableContainer from '../containers/table-container';
import ChartsContainer from '../containers/charts-container'
import DashboardContainer from '../containers/dashboard-container';
import NotificationsContainer from '../containers/notifications-container';

let styles = {
    sidebar_show: {
      margin: '0 150px 0 0',
    },
    sidebar_hidden: {
      margin: '0 0 0 0',
    }
  }


class ContentLayout extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
                <Switch>
                    <Redirect exact from='/' to='/forms' />
                    <Route exact path='/dashboard' component={ DashboardContainer } />
                    <Route exact path='/forms' component={FormsContainer} />
                    <Route exact path='/tables' component={ TableContainer } />
                    <Route exact path='/charts' component={ ChartsContainer } />
                    <Route exact path='/notifications' render={() => {
                        return <NotificationsContainer {...this.props} />
                    }}/> 
                </Switch>
        );
    }
}

export default Radium(ContentLayout);