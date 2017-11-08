import React, { Component } from 'react';


import CardContainer from './card-container';
import TableExample from '../views/tables/table-example';


const ExampleTableCard = CardContainer(TableExample, 'Example: Google Knowledge Graph Search');

class TableContainer extends Component {
    render(){
        return(
            <ExampleTableCard />
        );
    }
}

export default TableContainer;