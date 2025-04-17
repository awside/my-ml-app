import { useFetch } from '../services/useFetch'
import ToggleBox from './ToggleBox' // import it

const FactorSelector: React.FC<{
  selected: Set<string>
  setSelected: React.Dispatch<React.SetStateAction<Set<string>>>
}> = ({ selected, setSelected }) => {
  const { data } = useFetch<
    {
      name: string
      type: 'numerical' | 'categorical' | 'date'
    }[]
  >('http://localhost:8000/eda/column-categories')

  const toggle = (name: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(name) ? next.delete(name) : next.add(name)
      return next
    })
  }

  const numerical = data?.filter((d) => d.type === 'numerical') ?? []
  const categorical = data?.filter((d) => d.type === 'categorical') ?? []

  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Numerical */}
      <div>
        <h2 className="text-lg font-bold mb-2">Numerical</h2>
        <ul className="space-y-2">
          {numerical.map((col) => (
            <ToggleBox
              key={col.name}
              name={col.name}
              isSelected={selected.has(col.name)}
              onToggle={() => toggle(col.name)}
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
              isSelected={selected.has(col.name)}
              onToggle={() => toggle(col.name)}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FactorSelector
