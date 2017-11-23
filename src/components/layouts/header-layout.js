import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

import SidebarLayout from './sidebar-layout';

class HeaderLayout extends Component {

    constructor(){
        super();
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleNavClick = (event) => {
        event.preventDefault();
        this.props.onNavClick();
    }

    render(){
        return(
            <Menu>
                <Menu.Item onClick={this.handleNavClick} icon='content' />
                <Menu.Item icon='bell' position='right'/>
           </Menu>
        );
    }
}

export default HeaderLayout;