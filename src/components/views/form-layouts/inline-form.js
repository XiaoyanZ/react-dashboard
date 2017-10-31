import React, {Component} from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Checkbox, InputGroup, Glyphicon, Col, Row } from 'react-bootstrap';

class InlineForm extends Component {
    render(){
        return(
            <Form inline>
                <Row>
                <Col sm={3}>
                    <FormGroup>
                        <FormControl
                        type="text"
                        placeholder="Name"/>
                    </FormGroup>
                </Col>
                <Col sm={4}>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon><Glyphicon glyph="envelope"/></InputGroup.Addon>
                        <FormControl 
                        type="text"
                        placeholder="hello@example.lcom" />
                    </InputGroup>
                </FormGroup>
                </Col>
                <Col sm={3}><Checkbox>Remember me</Checkbox></Col>
                <Col sm={2}><Button type="submit">Submit</Button></Col>
                </Row>
            </Form>
        );
    }
}

export default InlineForm;