import React, { Component } from 'react';
import { Sidebar, Segment, Grid } from 'semantic-ui-react';

import ContentLayout from './components/layouts/content-layout';
import HeaderLayout from './components/layouts/header-layout';
import SidebarLayout from './components/layouts/sidebar-layout';

class App extends Component {

    constructor(){
        super();
        this.state = {
            navVisible: true
        }
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleNavClick = () => {
        this.setState((prevState) => {
            return{
                navVisible: !prevState.navVisible
            }
        })
    }

    render(){
        return(
            <div>
                {/* <Segment.Group> */}
                {/* <Segment vertical> */}
                    <HeaderLayout onNavClick={this.handleNavClick}/>
                {/* </Segment> */}
                {/* <Segment vertical> */}
                <Sidebar.Pushable> 
                    <Grid>
                        <Grid.Column width={this.state.navVisible? 3: 0}>
                            <Sidebar visible={this.state.navVisible} width='thin' animation='push' direction='left'>
                                <SidebarLayout />
                            </Sidebar> 
                        </Grid.Column>
                        <Grid.Column width={this.state.navVisible? 13: 16} stretched>
                            <Sidebar.Pusher>
                                <ContentLayout />
                            </Sidebar.Pusher>
                        </Grid.Column>
                    </Grid>
                </Sidebar.Pushable>
                {/* </Segment> */}
                {/* </Segment.Group> */}
            </div>
        );
    }
}


export default App;