import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

import ContentLayout from './content-layout';

class SidebarLayout extends Component {

    constructor(props){
        super(props);
    }

    
    render(){
        return(
          <Menu vertical tabular fluid>
            <Menu.Item as={Link} to='/dashboard'>
            <Icon name='dashboard' /> 
              Dashboard
            </Menu.Item>
            <Menu.Item as={Link} to='/forms'>
              <Icon name='home' />
              Forms
            </Menu.Item>
            <Menu.Item  as={Link} to='/tables'>
              <Icon name='table' />
              Tables
            </Menu.Item>
            <Menu.Item as={Link} to='/charts'>
              <Icon name='bar chart' />
              Charts
            </Menu.Item>
            <Menu.Item as={Link} to='/notifications'>
              <Icon name='camera' />
              Notifications
            </Menu.Item>
          </Menu>
        );
    }
}

export default SidebarLayout;