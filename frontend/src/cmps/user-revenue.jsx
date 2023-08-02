import { useEffect, useState } from 'react';
import { RevenueCharts } from '../cmps/revenue-charts.jsx';
import { RevenueBarCharts } from './bar-chart.jsx';

export function UserRevenue({ revenue }) {
  const [selectedYear, setSelectedYear] = useState(revenue.length - 1)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1400px)')
    setIsMobile(mediaQuery.matches)

    function handleMediaQueryChange(ev){
      setIsMobile(ev.matches)
    }

    mediaQuery.addListener(handleMediaQueryChange)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  function handleYearChange(ev) {
    const selectedYearIndex = ev.target.value
    setSelectedYear(selectedYearIndex)
  }
  const selectedYearObject = revenue[selectedYear]

  return (
    <div className='dashboard-funds'>
      <h1>Revenue</h1>
      <div className='selectYear'>
        <label htmlFor='selectYear'>Select Year: </label>
        <select id='selectYear' value={selectedYear} onChange={handleYearChange}>
          {revenue.map((yearRevenue, idx) => (
            <option key={idx} value={idx}>
              {yearRevenue.year}
            </option>
          ))}
        </select>
      </div>
        <h4>Revenue per Month</h4>
        {isMobile ? (
          <RevenueCharts selectedYear={selectedYearObject} />
          ) : (
        <RevenueBarCharts selectedYear={selectedYearObject} />
      )}
    </div>
  )
}
