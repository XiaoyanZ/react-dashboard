import React, {Component} from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, InputGroup, Glyphicon } from 'react-bootstrap';

class ValidateInput extends Component {

    render(){
        return(
            <form>
                <FormGroup validationState="success">
                    <ControlLabel>Input with success</ControlLabel>
                    <FormControl type="text"/>
                    <HelpBlock>Help text with validation state.</HelpBlock>
                </FormGroup>
                <FormGroup validationState="warning">
                    <ControlLabel>Input with warning</ControlLabel>
                    <FormControl type="text"/>
                </FormGroup>
                <FormGroup validationState="error">
                    <ControlLabel>Input with error</ControlLabel>
                    <FormControl type="text"/>
                </FormGroup>
                <FormGroup validationState={null}>
                    <ControlLabel>Input with no validation state</ControlLabel>
                    <FormControl type="text"/>
                </FormGroup>
                <FormGroup validationState="success">
                    <ControlLabel>Input with success and feedback icon</ControlLabel>
                    <FormControl type="text"/>
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup validationState="warning">
                    <ControlLabel>Input with warning and feedback icon</ControlLabel>
                    <FormControl type="text"/>
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup validationState="error">
                    <ControlLabel>Input with error and feedback icon</ControlLabel>
                    <FormControl type="text"/>
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup validationState="error">
                    <ControlLabel>Input group with error and feedback icon</ControlLabel>
                    <InputGroup>
                        <InputGroup.Addon><Glyphicon glyph="envelope" /></InputGroup.Addon>
                        <FormControl 
                        type="text"
                        name="textGlyphiconBefore"
                        onChange={this.handleChange}/>
                    </InputGroup>
                </FormGroup>
                <Checkbox validationState="success">
                Checkbox with success
                </Checkbox>
                <Radio validationState="warning">
                Radio with warning
                </Radio>
                <Checkbox validationState="error">
                Checkbox with error
                </Checkbox>
            </form>
        );
    }
}

export default ValidateInput;