import { useFetch } from '../hooks/useFetch'

export const ColumnList = () => {
  const { data } = useFetch('http://localhost:8000/eda/columns')

  return (
    <div className="rounded-2xl shadow-lg bg-white p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Available Columns
      </h2>
      <ul className="flex flex-wrap gap-3">
        {data?.columns?.map((col: string) => (
          <li
            key={col}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-300"
          >
            {col}
          </li>
        ))}
      </ul>
    </div>
  )
}
