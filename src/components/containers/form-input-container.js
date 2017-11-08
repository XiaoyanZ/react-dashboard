import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import CardContainer from './card-container';
import BasicForm from '../views/forms/form-basic';
import FormWithMessage from '../views/forms/form-with-msg';

const BasicFormCard = CardContainer(BasicForm,'Basic Form');
const FormWithMessageCard = CardContainer(FormWithMessage,'Form with Message');

class FormInputContainer extends Component {

    render(){
        return(
            <Grid stackable>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <BasicFormCard />
                    </Grid.Column>
                    <Grid.Column>
                        <FormWithMessageCard />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default FormInputContainer;