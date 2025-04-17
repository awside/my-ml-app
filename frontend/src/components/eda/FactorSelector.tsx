import useFetch from '../services/useFetch'
import ToggleBox from './ToggleBox' // import it

const FactorSelector: React.FC<{
  selectedNumerical: Set<string>
  setSelectedNumerical: React.Dispatch<React.SetStateAction<Set<string>>>
  selectedCategorical: Set<string>
  setSelectedCategorical: React.Dispatch<React.SetStateAction<Set<string>>>
}> = ({
  selectedNumerical,
  setSelectedNumerical,
  selectedCategorical,
  setSelectedCategorical,
}) => {
  const { data } = useFetch<
    {
      name: string
      type: 'numerical' | 'categorical' | 'date'
    }[]
  >('/eda/column-categories')

  const toggleNumerical = (name: string) => {
    setSelectedNumerical((prev) => {
      const next = new Set(prev)
      next.has(name) ? next.delete(name) : next.add(name)
      return next
    })
  }

  const toggleCategorical = (name: string) => {
    setSelectedCategorical((prev) => {
      const next = new Set(prev)
      next.has(name) ? next.delete(name) : next.add(name)
      return next
    })
  }

  const numerical = data?.filter((d) => d.type === 'numerical') ?? []
  const categorical = data?.filter((d) => d.type === 'categorical') ?? []

  return (
    <div className="grid grid-cols-2 gap-8 border rounded shadow-md p-6">
      {/* Numerical */}
      <div>
        <h2 className="text-lg font-bold mb-2">Numerical</h2>
        <ul className="space-y-2">
          {numerical.map((col) => (
            <ToggleBox
              key={col.name}
              name={col.name}
              isSelected={selectedNumerical.has(col.name)}
              onToggle={() => toggleNumerical(col.name)}
            />
          ))}
        </ul>
      </div>

      {/* Categorical */}
      <div>
        <h2 className="text-lg font-bold mb-2">Categorical</h2>
        <ul className="space-y-2">
          {categorical.map((col) => (
            <ToggleBox
              key={col.name}
              name={col.name}
              isSelected={selectedCategorical.has(col.name)}
              onToggle={() => toggleCategorical(col.name)}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FactorSelector
