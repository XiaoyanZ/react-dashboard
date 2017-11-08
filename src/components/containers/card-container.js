import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

const CardContainer = (WrappedComponent, title, description) => {
    return class extends Component {
        render() {
            return(
                <Card raised fluid>
                    <Card.Content header={title} description={description} />
                    <Card.Content>
                        <WrappedComponent {...this.props}/>
                    </Card.Content>
                </Card>
            );
        }
    }
}

export default CardContainer;