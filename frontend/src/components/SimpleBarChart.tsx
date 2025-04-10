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

const SimpleBarChart: React.FC<{ data: DataPoint[] }> = ({ data }) => {
  return (
    <div className="w-full h-60 md:h-80 lg:h-96">
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
