import React, { Component } from 'react';
import { Message, Form, Button, Segment, Container } from 'semantic-ui-react'; 


class FormExample extends Component {

    constructor(){
        super();
        this.state = {
            error: false
        }
    }

    render(){
        return(
            <Container text fluid>
                <Message info attached="top">
                <Message.Content>
                    Thanks to <a href='https://github.com/christianalfoni/formsy-react'>formsy-react</a>, below is the example with elegant form validation
                </Message.Content>
                </Message>
                <Form as={Segment} attached error={this.state.error}>
                <Form.Group widths='equal'>
                    <Form.Input label='First Name' placeholder='First Name' type='text' required/>
                    <Form.Input label='Last Name' placeholder='Last Name' type='text' required/>
                </Form.Group>
                <Form.Input label='Email' type='email' placeholder='example@site.com' required/>
                <Form.Input label='Phone number' placeholder='xxx-xxx-xxxx' type='phone'/>
                <Form.Input label='Password' type='password' required/>
                <Form.Checkbox inline label='I agree to the terms and conditions' />
                <Button color='blue'>Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default FormExample;