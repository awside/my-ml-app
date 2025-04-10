import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

// Define the shape of your data
type DataPoint = {
  name: string
  value: number
}

const data: DataPoint[] = [
  { name: 'Group A', value: 12 },
  { name: 'Group B', value: 18 },
  { name: 'Group C', value: 5 },
]

const SimpleBarChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SimpleBarChart
