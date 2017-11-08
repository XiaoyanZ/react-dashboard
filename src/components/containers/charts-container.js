import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import CardContainer from './card-container';
import DoughnutChart from '../views/charts/chart-doughnut';
import PieChart from '../views/charts/chart-pie';
import LineChart from '../views/charts/chart-line';
import BubbleChart from '../views/charts/chart-bubble';
import RadarChart from '../views/charts/chart-radar';
import PolarChart from '../views/charts/chart-polar';
import BarChart from '../views/charts/chart-bar';
import HorizontalBarChart from '../views/charts/chart-horizontal-bar';


const DoughnutChartCard = CardContainer(DoughnutChart, 'Doughnut Chart');
const PieChartCard = CardContainer(PieChart, 'Pie Chart');
const LineChartCard = CardContainer(LineChart, 'Line Chart');
const BubbleChartCard = CardContainer(BubbleChart, 'Bubble Chart');
const RadarChartCard = CardContainer(RadarChart, 'Radar Chart');
const PolarChartCard = CardContainer(PolarChart, 'Polar Chart');
const BarChartCard = CardContainer(BarChart, 'Bar Chart');
const HorizontalBarChartCard = CardContainer(HorizontalBarChart, 'Horizontal Bar Chart');

class ChartsContainer extends Component {
    render(){
        return(
            <div>
            <Card.Group itemsPerRow={2} stackable>
                <DoughnutChartCard />
                <PieChartCard />
                <LineChartCard />
                <BubbleChartCard />
                <BarChartCard />
                <HorizontalBarChartCard />
            </Card.Group>
            <Card.Group stackable>
                <RadarChartCard />
                <PolarChartCard />
            </Card.Group>
            </div>
        );
    }
}

export default ChartsContainer;