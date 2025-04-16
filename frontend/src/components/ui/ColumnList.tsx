import { useFetch } from '../hooks/useFetch'

type Column_Categories = {
  name: string
  type: string
}

export const ColumnList = () => {
  const { data } = useFetch<Column_Categories[]>(
    'http://localhost:8000/eda/column-categories'
  )

  return (
    <div className="p-6 bg-white shadow border border-base-200 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Column Categories</h2>
      <ul className="space-y-2">
        {data?.map((col) => (
          <li key={col.name} className="pb-2">
            <strong>{col.name}</strong>: {col.type}
          </li>
        ))}
      </ul>
    </div>
  )
}
