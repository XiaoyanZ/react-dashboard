import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import SidebarLayout from './sidebar-layout';

class HeaderLayout extends Component {

    constructor(props){
        super(props);
        this.state = {
            navVisible: true,
        };
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleNavClick = (event) => {
        event.preventDefault();
        this.setState({
            navVisible: !this.state.navVisible,
        })
    }

    render(){
        return(
            <div>
            <Menu color="pink">
                <Menu.Item onClick={this.handleNavClick}>
                    <Icon name="content" />
                </Menu.Item>
           </Menu>
            <SidebarLayout visible={this.state.navVisible}/>
            </div>
        );
    }
}

export default HeaderLayout;