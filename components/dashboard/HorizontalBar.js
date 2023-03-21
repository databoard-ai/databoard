import React from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, PointElement, Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    BarElement, CategoryScale, LinearScale, Tooltip, PointElement, Legend
)

const HorizontalBar = ({data, options}) => {
     
    return(
        <Bar
            data = {data}
            options = {options}
        ></Bar>
    )
};

export default HorizontalBar;