import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import CardContainer from './card-container';
import BasicInput from '../views/forms/basic-input';
import GroupInput from '../views/forms/group-input';
import ValidateInput from '../views/forms/validate-input';


const BasicInputCard = CardContainer(BasicInput,'Basic Input');
const GroupInputCard = CardContainer(GroupInput,'Group Input');
const ValidationInputCard = CardContainer(ValidateInput,'Input with Validation');

class FormInputContainer extends Component {

    render(){
        return(
            <Grid>
                <Row>
                    <Col sm={6}><BasicInputCard /></Col>
                    <Col sm={6}>
                        <Row>
                            <Col><GroupInputCard /></Col>
                            <Col><ValidationInputCard /></Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default FormInputContainer;