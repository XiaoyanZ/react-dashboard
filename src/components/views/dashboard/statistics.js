import React, { Component } from 'react';
import { Statistic, Icon } from 'semantic-ui-react';

class Statistics extends Component {

    render(){
        return(
            <Statistic.Group widths={4}>
                <Statistic>
                    <Statistic.Value>2,000</Statistic.Value>
                    <Statistic.Label><Icon name='cart'/>Sale</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>5,134</Statistic.Value>
                    <Statistic.Label><Icon name='thumbs up'/>Like</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>6,000</Statistic.Value>
                    <Statistic.Label><Icon name='eye'/>View</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>958</Statistic.Value>
                    <Statistic.Label><Icon name='users'/>New member</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        );
    }

}

export default Statistics;