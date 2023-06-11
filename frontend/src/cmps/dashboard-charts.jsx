import { useSelector } from 'react-redux'

import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

export function DashboardCharts() {



    const data = {
        labels: ['pending', 'completed',],
        datasets: [
            {
                label: 'Completed Orders',
                data:[1,3],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.5)',
                    'rgba(0, 255, 0, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 0, 0, 1)',
                    'rgba(0, 255, 0, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return (
        <div style={{ maxWidth: '200px', margin: 'auto' }}>
            <Doughnut data={data} />
        </div>
    )
}