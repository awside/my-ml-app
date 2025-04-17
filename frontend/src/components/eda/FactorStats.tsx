import React from 'react'
import useFetch from '../services/useFetch' // adjust path as needed

const FactorStats: React.FC<{
  column: string
}> = ({ column }) => {
  const { data: stats } = useFetch<{
    [key: string]: number
  }>(`/eda/describe/${column}`)

  if (!stats) return null // no rendering if data hasn't loaded yet or is null

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2 capitalize">{column} Stats</h2>
      <ul className="text-sm text-gray-700 space-y-1">
        {Object.entries(stats).map(([key, value]) => (
          <li key={key}>
            <span className="font-medium">{key}: </span>
            <span>{value.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FactorStats
