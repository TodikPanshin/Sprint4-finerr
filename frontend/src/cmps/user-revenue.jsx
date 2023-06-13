import { useState } from 'react';
import { RevenueCharts } from '../cmps/revenue-charts.jsx';

export function UserRevenue({ revenue }) {
  const [selectedYear, setSelectedYear] = useState(revenue.length - 1)

  function handleYearChange(ev) {
    const selectedYearIndex = ev.target.value
    setSelectedYear(selectedYearIndex)
  }
  const selectedYearObject = revenue[selectedYear]


  

  return (
    <div className='dashboard-funds'>
      <h1>Revenue</h1>
      <h4>Revenue per Month</h4>
      <div>
        <label htmlFor='yearSelect'>Select Year: </label>
        <select id='yearSelect' value={selectedYear} onChange={handleYearChange}>
          {revenue.map((yearRevenue, idx) => (
            <option key={idx} value={idx}>
              {yearRevenue.year}
            </option>
          ))}
        </select>
      </div>
      <RevenueCharts selectedYear={selectedYearObject} />
    </div>
  )
}
