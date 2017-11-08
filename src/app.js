import React, { Component } from 'react';

import ContentLayout from './components/layouts/content-layout';
import HeaderLayout from './components/layouts/header-layout';

class App extends Component {
    render(){
        return(
            <div>
                <HeaderLayout />
                {/* <NavLayout /> */}
                {/* <ContentLayout /> */}
            </div>
        );
    }
}


export default App;