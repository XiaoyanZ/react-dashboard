import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import CardContainer from './card-container';
import BasicForm from '../views/forms/form-basic';
import FormWithMessage from '../views/forms/form-with-msg';
import FormExample from '../views/forms/form-example';

const BasicFormCard = CardContainer(BasicForm,'Basic Form');
const FormWithMessageCard = CardContainer(FormWithMessage,'Form with Message');
// const FormExampleCard = CardContainer(FormExample, 'Example: Form with React-Validation');

class FormsContainer extends Component {

    render(){
        return(
            <div>
            <Card.Group stackable itemsPerRow={2}>
                <BasicFormCard />
                <FormWithMessageCard />
            </Card.Group>
            </div>
        );
    }
}

export default FormsContainer;