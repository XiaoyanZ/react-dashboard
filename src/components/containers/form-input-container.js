import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import CardContainer from './card-container';
import BasicInput from '../views/forms/basic-input';


const BasicInputCard = CardContainer(BasicInput,'Basic Input');
// const GroupInputCard = CardContainer(DefaultInput,'Group Input');
// const ValidationInputCard = CardContainer(DefaultInput,'Input with Validation');
// const CheckboxRadioCard = CardContainer(DefaultInput,'Checkboxes & Radios');

class FormInputContainer extends Component {

    render(){
        return(
            <Grid>
                <Row>
                    <Col sm={6}><BasicInputCard /></Col>
                    <Col sm={6}><BasicInputCard /></Col>
                {/* <GroupInputCard />
                <ValidationInputCard />
                <CheckboxRadioCard /> */}
                </Row>
            </Grid>
        );
    }
}

export default FormInputContainer;