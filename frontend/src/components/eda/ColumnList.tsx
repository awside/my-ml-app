import React, { useState } from 'react'
import { useFetch } from '../services/useFetch'

type ColumnMeta = {
  name: string
  type: 'numerical' | 'categorical' | 'date'
}

export const ColumnList = () => {
  const { data } = useFetch<ColumnMeta[]>(
    'http://localhost:8000/eda/column-categories'
  )

  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggleColumn = (colName: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(colName)) {
        next.delete(colName)
      } else {
        next.add(colName)
      }
      return next
    })
  }

  const isSelected = (colName: string) => selected.has(colName)

  const numerical = data?.filter((col) => col.type === 'numerical') ?? []
  const categorical = data?.filter((col) => col.type === 'categorical') ?? []

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Numerical */}
      <div>
        <h2 className="text-lg font-bold mb-2">Numerical</h2>
        <ul className="space-y-2">
          {numerical.map((col) => (
            <li
              key={col.name}
              onClick={() => toggleColumn(col.name)}
              className={`cursor-pointer text-center text-sm px-3 py-1 rounded-md border transition 
                ${
                  isSelected(col.name)
                    ? col.type === 'numerical'
                      ? 'bg-blue-200 border-blue-500'
                      : 'bg-green-200 border-green-500'
                    : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
                }
              `}
            >
              {col.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Categorical */}
      <div>
        <h2 className="text-lg font-bold mb-2">Categorical</h2>
        <ul className="space-y-2">
          {categorical.map((col) => (
            <li
              key={col.name}
              onClick={() => toggleColumn(col.name)}
              className={`cursor-pointer text-center text-sm px-3 py-1 rounded-md border transition 
                ${
                  isSelected(col.name)
                    ? col.type === 'numerical'
                      ? 'bg-blue-200 border-blue-500'
                      : 'bg-green-200 border-green-500'
                    : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
                }
              `}
            >
              {col.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
