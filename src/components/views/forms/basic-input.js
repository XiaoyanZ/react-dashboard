import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button } from 'react-bootstrap';


class BasicInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            defaultInputText:'',
            largeInputText:'',
            smallInputText:'',
            textarea:'',
            password: '',
            email: '',
            file: '',
            checkbox: '',
            radio: '',
            radioGroup:'',
            select:'',

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState((prevState, props) => {
            return {[name]: value}
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <ControlLabel>Default input</ControlLabel>
                    <FormControl 
                    type="text"
                    name="defaultInputText" 
                    placeholder="Default input"
                    onChange={this.handleInputChange} />
                    <HelpBlock>This is help block</HelpBlock>
                </FormGroup>
                <FormGroup bsSize="small">
                    <ControlLabel>Small input</ControlLabel>
                    <FormControl 
                    type="text"
                    name="smallInputText" 
                    onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup bsSize="large">
                    <ControlLabel>Large Input</ControlLabel>
                    <FormControl 
                    type="text"
                    name="largeInputText" 
                    onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Disable input</ControlLabel>
                    <FormControl 
                    type="text"
                    name="disabledInputText" 
                    onChange={this.handleInputChange} 
                    disabled/>
                </FormGroup>
                <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl 
                    type="email"
                    name="email" 
                    onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl 
                    type="password"
                    name="password" 
                    onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>File</ControlLabel>
                    <FormControl 
                    type="file"
                    name="file" 
                    onChange={this.handleInputChange} />
                </FormGroup>
                <Checkbox name="checkbox" onChange={this.handleInputChange} readOnly>Checkbox</Checkbox>
                <Radio name="radio" onChange={this.handleInputChange} readOnly>Radio</Radio>
                <FormGroup onChange={this.handleInputChange}>
                    <Radio name="radioGroup" value="1" inline>
                    1
                    </Radio>
                    {' '}
                    <Radio name="radioGroup" value="2" inline>
                    2
                    </Radio>
                    {' '}
                    <Radio name="radioGroup" value="3" inline>
                    3
                    </Radio>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Select</ControlLabel>
                    <FormControl 
                    componentClass="select"
                    name="select" 
                    onChange={this.handleInputChange}>
                        <option value="hello">hello</option>
                        <option value="world">world</option>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                        <ControlLabel>Text area</ControlLabel>
                        <FormControl 
                        componentClass="textarea"
                        name="textarea" 
                        onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Static text</ControlLabel>
                    <FormControl.Static>
                        email@example.com
                    </FormControl.Static>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </form>
        );
    }
}

export default BasicInput;