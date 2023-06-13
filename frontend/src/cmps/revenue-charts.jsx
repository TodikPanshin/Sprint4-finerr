import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'


ChartJS.register(ArcElement, Tooltip, Legend)


export function RevenueCharts({ selectedYear }) {
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
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        cutout: '80%',
        animation: {
            animateRotate: false,
            animateScale: true,
        },
    }

    return (
        <div style={{ position: 'relative', maxWidth: '150px', margin: 'auto',insetBlock: '27px'}}>
            <Doughnut data={data} options={options} />
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '24px',
                    fontWeight: 'bold',
                }}
            >
                US${yearRevenue}
            </div>
        </div>
    )
}