import React, { Component } from 'react';
import {FormGroup, InputGroup, FormControl, Glyphicon, Button, DropdownButton, MenuItem } from 'react-bootstrap';

class GroupInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textDollarBefore:'',
            textPointAfter:'',
            textGlyphiconAfter: '',
            textGlyphiconBefore: '',
            textButtonBefore:'',

        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState((prevState, props) => {
            console.log(prevState);
            return {[name]: value}
        })
    }

    render(){
        return(
            <form>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon>$</InputGroup.Addon>
                        <FormControl 
                        type="text"
                        name="textDollarBefore"
                        onChange={this.handleChange}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                        type="text"
                        name="textPointAfter"
                        onChange={this.handleChange}/>
                        <InputGroup.Addon>.00</InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon><Glyphicon glyph="envelope" /></InputGroup.Addon>
                        <FormControl 
                        type="text"
                        name="textGlyphiconBefore"
                        onChange={this.handleChange}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                        type="text"
                        name="textGlyphiconAfter"
                        onChange={this.handleChange}/>
                        <InputGroup.Addon><Glyphicon glyph="tag" /></InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Button>
                            <Button>Before</Button>
                        </InputGroup.Button>
                        <FormControl 
                        type="text"
                        name="textButtonBefore"
                        onChange={this.handleChange}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                        type="text" 
                        name="textButtonAfter"
                        onChange={this.handleChange}/>
                        <DropdownButton
                        componentClass={InputGroup.Button}
                        title="Action"
                        id="input-dropdown-addon">
                            <MenuItem key="item1">Item1</MenuItem>
                            <MenuItem key="item2">Item2</MenuItem>
                        </DropdownButton>
                    </InputGroup>
                </FormGroup>
            </form>
        );
    }
}

export default GroupInput;