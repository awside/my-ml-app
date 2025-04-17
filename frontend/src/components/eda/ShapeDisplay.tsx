import useFetch from '../services/useFetch'
import { RowsIcon, ColumnsIcon } from './ShapeIcons'

const ShapeDisplay: React.FC = () => {
  const { data } = useFetch<{
    shape: [number, number]
  }>('/eda/shape')

  if (!data) return null

  const [rows, cols] = data.shape

  return (
    <div className="p-4 border rounded shadow-md flex gap-6 items-center">
      {/* Rows Icon */}
      <div className="flex items-center gap-2">
        <RowsIcon className="w-6 h-6 text-blue-500" />
        <span className="text-sm font-medium text-gray-700">Rows: {rows}</span>
      </div>

      {/* Columns Icon */}
      <div className="flex items-center gap-2">
        <ColumnsIcon className="w-6 h-6 text-green-500" />
        <span className="text-sm font-medium text-gray-700">
          Columns: {cols}
        </span>
      </div>
    </div>
  )
}

export default ShapeDisplay
