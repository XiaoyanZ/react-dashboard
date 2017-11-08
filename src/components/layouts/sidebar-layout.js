import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

import ContentLayout from './content-layout';

let styles = {
  pusher_segment_pushed: {
    margin: '0 150px 0 0',
  },
  pusher_segment_unpushed: {
    margin: '0 0 0 0',
  },

}


class SidebarLayout extends Component {

    constructor(props){
        super(props);
    }

    
    render(){
        return(
            <div>
            <Sidebar.Pushable as={Segment}>
              <Sidebar as={Menu} animation='push' width='thin' visible={this.props.visible} icon='labeled' vertical>
                <Menu.Item name='form-input' as={Link} to='/forms/form-input'>
                  <Icon name='home' />
                  Form Input
                </Menu.Item>
                <Menu.Item name='gamepad' as={Link} to='/forms/form-layout'>
                  <Icon name='gamepad' />
                  Form Layout
                </Menu.Item>
                <Menu.Item name='camera' as={Link} to='/tables'>
                  <Icon name='camera' />
                  Tables
                </Menu.Item>
                <Menu.Item name='camera' as={Link} to='/charts'>
                  <Icon name='camera' />
                  Charts
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher>
                <Segment padded="very" style={this.props.visible? styles.pusher_segment_pushed : styles.pusher_segment_unpushed}>
                  <ContentLayout />
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>

        );
    }
}

export default Radium(SidebarLayout);