import React, { Component } from 'react';

const CardContainer = (WrappedComponent, title) => {
    return class extends Component {
        render() {
            return(
                <div>
                    <h4>{title}</h4>
                    <WrappedComponent {...this.props}/>
                </div>
            );
        }
    }
}

export default CardContainer;