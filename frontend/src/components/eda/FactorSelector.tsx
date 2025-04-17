import { useState } from 'react'
import { useFetch } from '../services/useFetch'

type ColumnMeta = {
  name: string
  type: 'numerical' | 'categorical' | 'date'
}

export const FactorSelector = () => {
  const { data } = useFetch<ColumnMeta[]>(
    'http://localhost:8000/eda/column-categories'
  )
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (name: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(name) ? next.delete(name) : next.add(name)
      return next
    })
  }

  const isSelected = (name: string) => selected.has(name)

  const numerical = data?.filter((d) => d.type === 'numerical') ?? []
  const categorical = data?.filter((d) => d.type === 'categorical') ?? []

  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Numerical */}
      <div>
        <h2 className="text-lg font-bold mb-2">Numerical</h2>
        <ul className="space-y-2">
          {numerical.map((col) => (
            <li key={col.name} className="flex items-center gap-3">
              <button
                onClick={() => toggle(col.name)}
                className={`w-6 h-6 rounded border-2 flex items-center justify-center
                  ${
                    isSelected(col.name)
                      ? 'bg-blue-500 border-blue-500 text-white'
                      : 'bg-white border-gray-400'
                  }
                `}
              >
                {isSelected(col.name) && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
              <span className="text-sm">{col.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Categorical */}
      <div>
        <h2 className="text-lg font-bold mb-2">Categorical</h2>
        <ul className="space-y-2">
          {categorical.map((col) => (
            <li key={col.name} className="flex items-center gap-3">
              <button
                onClick={() => toggle(col.name)}
                className={`w-6 h-6 rounded border-2 flex items-center justify-center
                  ${
                    isSelected(col.name)
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'bg-white border-gray-400'
                  }
                `}
              >
                {isSelected(col.name) && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
              <span className="text-sm">{col.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
