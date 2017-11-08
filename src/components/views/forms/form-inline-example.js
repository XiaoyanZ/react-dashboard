import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';

class FormInlineExample extends Component {

    constructor(props){
        super(props);
        this.state = {
            query: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleInputChange = (e) => {
        this.setState({query: e.target.value});
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
    }

    render(){
        return(
            <div>
            <Form onSubmit={this.handleSearchSubmit}>
            <Form.Group inline>
                <Form.Input placeholder="Try your query here" onChange={this.handleInputChange}/>
                <Form.Button primary>Search</Form.Button>
            </Form.Group>
            </Form>
            <Message error size="tiny" attached="bottom" content="Request error, please try another query" hidden={!this.props.errorMsgVisible}/>
            </div>             
        );
    }
}

export default FormInlineExample;