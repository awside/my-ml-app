import { useFetch } from '../services/useFetch'
import ToggleBox from './ToggleBox' // import it

type ColumnMeta = {
  name: string
  type: 'numerical' | 'categorical' | 'date'
}

type FactorSelectorProps = {
  selected: Set<string>
  setSelected: React.Dispatch<React.SetStateAction<Set<string>>>
}

const FactorSelector: React.FC<FactorSelectorProps> = ({
  selected,
  setSelected,
}) => {
  const { data } = useFetch<ColumnMeta[]>(
    'http://localhost:8000/eda/column-categories'
  )

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
