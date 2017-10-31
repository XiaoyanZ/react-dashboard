import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavLayout extends Component {

    render(){
        return(
            <nav>
                <ul>
                    <li>Forms</li>
                    <ul>
                        <li><Link to='/forms/form-input'>Form Input</Link></li>
                        <li><Link to='/forms/form-layout'>Form Layout</Link></li>
                    </ul>
                    <li><Link to='/tables'>Tables</Link></li>
                </ul>
            </nav>
        );
    }
}

export default NavLayout;