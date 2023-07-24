import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export function DashboardCharts({ orders }) {
  function reduceOrderStatus(orders) {
    const statusCounts = orders.reduce((statusCounts, order) => {
      const { status } = order;
      statusCounts[status.toLowerCase()] = (statusCounts[status.toLowerCase()] || 0) + 1
      return statusCounts;
    }, { pending: 0, approved: 0, declined: 0, completed: 0 })
    return statusCounts
  }

  const statusCounts = reduceOrderStatus(orders)
  const data = {
    labels: ['Pending', 'Approved', 'Declined', 'Completed'],
    datasets: [
      {
        label: 'Order Status',
        data: [
          statusCounts.pending,
          statusCounts.approved,
          statusCounts.declined,
          statusCounts.completed,
        ],
        backgroundColor: ['#ffb33e', '#16b910', '#74767E', ' #446ee7'],
        borderColor: ['#ffb33e', '#16b910', '#74767E', ' #446ee7'],
        borderWidth: 1,
      },
    ],
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
  };

  return (
    <div style={{ position: 'relative', width: '150px', margin: 'auto' ,insetBlock: '27px'}}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '16px',
          fontWeight: '700',
        }}
      >
         {`orders pending\n${statusCounts.pending}`}
      </div>
    </div>
  );
}