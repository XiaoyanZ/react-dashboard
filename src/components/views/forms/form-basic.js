import React, { Component } from 'react';
import { Form, Input, Rating } from 'semantic-ui-react';

const stateOptions = [
    { key: 'AL', value: 'AL', text: 'Alabama' },
    { key: 'AK', value: 'AK', text: 'Alaska' },
    { key: 'AZ', value: 'AZ', text: 'Arizona' },
    { key: 'AR', value: 'AR', text: 'Arkansas' },
    { key: 'CA', value: 'CA', text: 'California' },
    { key: 'CO', value: 'CO', text: 'Colorado' },
    { key: 'CT', value: 'CT', text: 'Connecticut' },
    { key: 'DE', value: 'DE', text: 'Delaware' },
    { key: 'DC', value: 'DC', text: 'District Of Columbia' },
    { key: 'FL', value: 'FL', text: 'Florida' },
    { key: 'GA', value: 'GA', text: 'Georgia' },
    { key: 'HI', value: 'HI', text: 'Hawaii' },
    { key: 'ID', value: 'ID', text: 'Idaho' },
    { key: 'IL', value: 'IL', text: 'Illinois' },
    { key: 'IN', value: 'IN', text: 'Indiana' },
    { key: 'IA', value: 'IA', text: 'Iowa' },
    { key: 'KS', value: 'KS', text: 'Kansas' },
    { key: 'KY', value: 'KY', text: 'Kentucky' },
    { key: 'LA', value: 'LA', text: 'Louisiana' },
    { key: 'ME', value: 'ME', text: 'Maine' },
    { key: 'MD', value: 'MD', text: 'Maryland' },
    { key: 'MA', value: 'MA', text: 'Massachusetts' },
    { key: 'MI', value: 'MI', text: 'Michigan' },
    { key: 'MN', value: 'MN', text: 'Minnesota' },
    { key: 'MS', value: 'MS', text: 'Mississippi' },
    { key: 'MO', value: 'MO', text: 'Missouri' },
    { key: 'MT', value: 'MT', text: 'Montana' },
    { key: 'NE', value: 'NE', text: 'Nebraska' },
    { key: 'NV', value: 'NV', text: 'Nevada' },
    { key: 'NH', value: 'NH', text: 'New Hampshire' },
    { key: 'NJ', value: 'NJ', text: 'New Jersey' },
    { key: 'NM', value: 'NM', text: 'New Mexico' },
    { key: 'NY', value: 'NY', text: 'New York' },
    { key: 'NC', value: 'NC', text: 'North Carolina' },
    { key: 'ND', value: 'ND', text: 'North Dakota' },
    { key: 'OH', value: 'OH', text: 'Ohio' },
    { key: 'OK', value: 'OK', text: 'Oklahoma' },
    { key: 'OR', value: 'OR', text: 'Oregon' },
    { key: 'PA', value: 'PA', text: 'Pennsylvania' },
    { key: 'RI', value: 'RI', text: 'Rhode Island' },
    { key: 'SC', value: 'SC', text: 'South Carolina' },
    { key: 'SD', value: 'SD', text: 'South Dakota' },
    { key: 'TN', value: 'TN', text: 'Tennessee' },
    { key: 'TX', value: 'TX', text: 'Texas' },
    { key: 'UT', value: 'UT', text: 'Utah' },
    { key: 'VT', value: 'VT', text: 'Vermont' },
    { key: 'VA', value: 'VA', text: 'Virginia' },
    { key: 'WA', value: 'WA', text: 'Washington' },
    { key: 'WV', value: 'WV', text: 'West Virginia' },
    { key: 'WI', value: 'WI', text: 'Wisconsin' },
    { key: 'WY', value: 'WY', text: 'Wyoming' },
  ]


class BasicForm extends Component {
    render(){
        return(
            <Form>
                    <Form.Input label="Text input" placeholder="Text" />
                    <Form.Input label="Disabled text input" disabled/>
                    <Form.Input label="Password" type="password" />
                    <Form.Input label="Input with error" error/>
                    <Form.Input label="Transparent input" placeholder="Text" transparent/>
                    <Form.Input label="Input with icon" icon="search" placeholder="Search..."/>
                    <Form.Field>
                        <label>Input with label</label>
                        <Input label='http://' placeholder='mysite.com' />
                    </Form.Field>
                    <Form.Field>
                        <label>Input with corner icon</label>
                        <Input label={{ icon: 'asterisk' }} labelPosition='left corner' placeholder='Search...'/>
                    </Form.Field>
                    <Form.Group inline>
                        <label>Checkbox</label>
                        <Form.Checkbox label="check" />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Toogle</label>
                        <Form.Checkbox label="toogle" toggle />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Checkbox</label>
                        <Form.Checkbox label="slider" slider/>
                    </Form.Group>
                    <Form.Group inline>
                        <label>Radio</label>
                        <Form.Radio name="radioGroup" label="hello" />
                        <Form.Radio name="radioGroup" label="world" />
                    </Form.Group>
                    <Form.Group inline> 
                        <label>Rating</label>
                        <Form.Field control={Rating} />
                        <Form.Field control={Rating} icon="star" defaultRating={3} maxRating={5}/>
                        <Form.Field control={Rating} icon="heart" defaultRating={1} maxRating={3}/>
                    </Form.Group>
                    <Form.Select label="Select" options={stateOptions} placeholder="State" />
                    <Form.Dropdown label="Multi select with search" placeholder='State' fluid multiple search selection options={stateOptions} />
                    <Form.TextArea label='Text area' placeholder='Tell us more about you...' />
            </Form>
        );
    }
}

export default BasicForm;