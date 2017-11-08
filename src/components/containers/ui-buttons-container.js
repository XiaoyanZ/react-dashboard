import React, { Component } from 'react';
import { Container} from 'semantic-ui-react';


import CardContainer from './card-container';
import Buttons from '../views/ui/buttons';


const ButtonsCard = CardContainer(SmartTable, 'Smart Table');

class TableContainer extends Component {
    render(){
        return(
            <Container>
            {/* <Grid>
            <Grid.Row>
                <Grid.Column> */}
                    <SmartTableCard />
                {/* </Grid.Column>
            </Grid.Row>
            </Grid> */}
            </Container>
        );
    }
}

export default TableContainer;