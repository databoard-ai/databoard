import React from 'react'
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale,  Tooltip, PointElement, Legend} from 'chart.js'
import {Line} from 'react-chartjs-2';

ChartJS.register(
    LineElement, CategoryScale, Tooltip, PointElement, Legend
)

const LineChart = ({data, options}) => {
     
    return(
        <Line
            data = {data}
            options = {options}
        ></Line>
    )
};

export default LineChart;