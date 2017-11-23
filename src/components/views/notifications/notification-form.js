import React, { Component } from 'react';
import { Form, Segment } from 'semantic-ui-react';

class NotificationForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            position: 'top-right',
            type: 'default',
            delay: 5000,
            autoClose: true,
            hideProgressBar: false,
            newestOnTop: false,
            closeOnClick: false,
            pauseOnHover: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e, {type, value, name}) => {
        this.setState((prevState) => {
            if(type === 'checkbox')
                return {[name]: !prevState[name]}
            return {[name]: value}
        });
    }

    handleShowToast = (e) => {
        this.props.onShowToast(this.state);
    }


    render(){
        return(
            <Form>
                <Form.Group inline>
                    <label>Position</label>
                    <Form.Radio label='top-right' value='top-right' checked={this.state.position==='top-right'} name='position' onChange={this.handleChange} />
                    <Form.Radio label='top-center' value='top-center' checked={this.state.position==='top-center'} name='position' onChange={this.handleChange} />
                    <Form.Radio label='top-left' value='top-left' checked={this.state.position==='top-left'} name='position' onChange={this.handleChange} />
                    <Form.Radio label='bottom-right' value='bottom-right' checked={this.state.position==='bottom-right'} name='position' onChange={this.handleChange} />
                    <Form.Radio label='bottom-center' value='bottom-center' checked={this.state.position==='bottom-center'} name='position' onChange={this.handleChange} />
                    <Form.Radio label='bottom-left' value='bottom-left' checked={this.state.position==='bottom-left'} name='position' onChange={this.handleChange} />
                </Form.Group>
                <Form.Group inline>
                    <label>Type</label>
                    <Form.Radio label='default' value='default' checked={this.state.type==='default'} name='type' onChange={this.handleChange} />
                    <Form.Radio label='info' value='info' checked={this.state.type==='info'} name='type' onChange={this.handleChange} />
                    <Form.Radio label='success' value='success' checked={this.state.type==='success'} name='type' onChange={this.handleChange} />
                    <Form.Radio label='warning' value='warning' checked={this.state.type==='warning'} name='type' onChange={this.handleChange} />
                    <Form.Radio label='error' value='error' checked={this.state.type==='error'} name='type' onChange={this.handleChange} />
                </Form.Group>
                <Form.Group inline>
                    <label>Configuration</label>
                    <Form.Checkbox label='Auto close' checked={this.state.autoClose} name='autoClose' onChange={this.handleChange} />
                    <Form.Checkbox label='Hide progress bar' checked={this.state.hideProgressBar} name='hideProgressBar' onChange={this.handleChange} />
                    <Form.Checkbox label='Newest on top' checked={this.state.newestOnTop} name='newestOnTop' onChange={this.handleChange} />
                    <Form.Checkbox label='Close on click' checked={this.state.closeOnClick} name='closeOnClick' onChange={this.handleChange} />
                    <Form.Checkbox label='Pause on hover' checked={this.state.pauseOnHover} name='pauseOnHover' onChange={this.handleChange} />
                </Form.Group>
                <Form.Button color='blue' onClick={this.handleShowToast}>Show Toast</Form.Button>
            </Form>
        );
    }
}

export default NotificationForm;