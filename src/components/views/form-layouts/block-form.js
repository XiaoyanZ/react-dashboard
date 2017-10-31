import React, {Component} from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Checkbox, Col, Row } from 'react-bootstrap';

class BlockForm extends Component {
    render(){
        return(
            <Form horizontal>
                <Row>
                    <Col sm={5}>
                    <FormGroup>
                        <ControlLabel>First Name</ControlLabel>
                        <FormControl
                        type="text"
                        placeholder="Jane"/>
                    </FormGroup>
                    </Col>
                    <Col smOffset={1} sm={5}>
                    <FormGroup>
                        <ControlLabel>Last Name</ControlLabel>
                        <FormControl 
                        type="text"
                        placeholder="Doeo" />
                    </FormGroup>
                    </Col>
                </Row>
                    <Row><Button type="submit">Submit</Button></Row>
                    
                
            </Form>
        );
    }
}

export default BlockForm;