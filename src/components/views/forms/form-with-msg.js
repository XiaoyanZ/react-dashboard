import React, {Component} from 'react';
import { Message, Form, Button, Icon, Label, Segment } from 'semantic-ui-react';

class FormWithMessage extends Component {
    render(){
        return(
            <div>
            <Message
              attached
              header='Welcome to our site!'
              content='Fill out the form below to sign-up for a new account'
            />
            <Form as={Segment} attached>
              <Form.Input label='Name' placeholder='Name' type='text' />
              <Form.Input label='Username' placeholder='Username' type='text' />
              <Form.Field>
                <label>Password</label>
                <input type='password' />
                <Label basic color='red' pointing='above'>Your password must be 6 characters or more</Label>
              </Form.Field>
              <Form.Checkbox inline label='I agree to the terms and conditions' />
              <Button color='blue'>Submit</Button>
            </Form>
            <Message attached='bottom' warning>
              <Icon name='help' />
              Already signed up?&nbsp;<a>Login here</a>&nbsp;instead.
            </Message>
            </div>
        );
    }
}

export default FormWithMessage;