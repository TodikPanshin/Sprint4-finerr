import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js'

import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function RevenueBarCharts({ selectedYear }) {
    const selectedYearRevenue = selectedYear.monthRevenue
    const monthRevenueData = selectedYearRevenue.map((monthData) => monthData.revenue)
    const yearRevenue = monthRevenueData.reduce((total, revenue) => total + revenue, 0)

    const data = {
        labels: selectedYearRevenue.map((monthData) => monthData.month),
        datasets: [
            {
                label: 'Monthly Revenue',
                data: monthRevenueData,
                backgroundColor: ['#E4E5E7', '#16b910', '#f5a623', '#337ab7', '#5cb85c', '#5bc0de', '#f0ad4e', '#d9534f', '#428bca', '#0275d8', '#5d6069', '#292b2c'],
                borderColor: ['#E4E5E7', '#16b910', '#f5a623', '#337ab7', '#5cb85c', '#5bc0de', '#f0ad4e', '#d9534f', '#428bca', '#0275d8', '#5d6069', '#292b2c'],
                borderWidth: 1,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    }

    return (
        <div style={{ width: '500px', margin: 'auto' }}>
            <Bar data={data} options={options} />
            <div style={{ textAlign: 'center', fontSize: '24px', fontWeight: '700' }}>
                Total Revenue: US${yearRevenue}
            </div>
        </div>
    );
}
