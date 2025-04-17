type Props = {
  columns: string[]
}

const GraphDisplay: React.FC<Props> = ({ columns }) => {
  return (
    <div className="p-4 bg-gray-100 border rounded">
      <h2 className="text-lg font-semibold mb-2">Selected Columns</h2>
      {columns.length === 0 ? (
        <p className="text-gray-500">No columns selected</p>
      ) : (
        <ul className="list-disc pl-6">
          {columns.map((col) => (
            <li key={col}>{col}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GraphDisplay
