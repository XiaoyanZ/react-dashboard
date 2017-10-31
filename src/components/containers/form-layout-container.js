import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import CardContainer from './card-container';
import InlineForm from '../views/form-layouts/inline-form';
import HorizontalForm from '../views/form-layouts/horizontal-form';
import BlockForm from '../views/form-layouts/block-form';


const InlineFormCard = CardContainer(InlineForm, 'Inline Form');
const HorizontalFormCard = CardContainer(HorizontalForm, 'Horizontal Form');
const BlockFormCard = CardContainer(BlockForm, 'Block Form');


class FormLayoutContainer extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={12}><InlineFormCard /></Col>
                </Row>
                <Row>
                    <Col sm={6}><HorizontalFormCard /></Col>
                    <Col sm={6}><BlockFormCard /></Col>
                </Row>
            </Grid>
        );
    }
}

export default FormLayoutContainer;