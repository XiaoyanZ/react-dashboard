import React, { Component } from 'react';

import CardContainer from './card-container';
import Statistics from '../views/dashboard/statistics';
import LineChart from '../views/charts/chart-line';


const StatisticsCard = CardContainer(Statistics, 'Statistics');
const LineChartCard = CardContainer(LineChart, 'Line Chart');


class Dashboard extends Component {
    render(){
        return(
            <div>
            <StatisticsCard />
            <LineChartCard />
            </div>
        );
    }
}

export default Dashboard;