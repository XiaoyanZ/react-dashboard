import React, {Component} from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Checkbox, InputGroup, Glyphicon, Col, Row } from 'react-bootstrap';

class HorizontalForm extends Component {
    render(){
        return(
            <Form horizontal>
                <Row>
                <FormGroup>
                    <Col sm={2}><ControlLabel>Name</ControlLabel></Col>
                    <Col sm={9}>
                        <FormControl
                        type="text"
                        placeholder="Name"/>
                    </Col>
                </FormGroup>
                </Row>
                <Row>
                <FormGroup>
                    <Col sm={2}><ControlLabel>Email</ControlLabel></Col>
                    <Col sm={9}>
                        <InputGroup>
                            <InputGroup.Addon><Glyphicon glyph="envelope"/></InputGroup.Addon>
                            <FormControl 
                            type="text"
                            placeholder="hello@example.lcom" />
                        </InputGroup>
                    </Col>
                </FormGroup>
                </Row>
                <Row><Checkbox>Remember me</Checkbox></Row>
                <Row><Button type="submit">Submit</Button></Row>
            </Form>
        );
    }
}

export default HorizontalForm;