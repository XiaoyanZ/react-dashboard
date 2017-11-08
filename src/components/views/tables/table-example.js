import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import axios from 'axios';

import FormInlineExample from '../forms/form-inline-example';
import SmartTable from './table-smart';

class TableExample extends Component {

    constructor(){
        super();
        this.state = {
            data: [],
            errorMsgVisible: false,
            loading: false
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }


    handleFormSubmit = (value) => {
        this.setState({loading: true})
        axios.get('/api/google/kgsearch',{
            params:{query: value}
          }).then(res => {
            this.setState({
                data: res.data.itemListElement,
                errorMsgVisible: false,
                loading: false
            });
          }).catch(err => {
            console.log(err);
            this.setState({
                errorMsgVisible: true,
                loading: false
            })
          });
    }

    render(){ 
        return(
        <Segment.Group>
            <Segment>
                <FormInlineExample onSubmit={this.handleFormSubmit} errorMsgVisible={this.state.errorMsgVisible}/>
            </Segment>
            <Segment>
                <SmartTable data={this.state.data} loading={this.state.loading}/>
            </Segment>
        </Segment.Group>
        );
    } 
}

export default TableExample;