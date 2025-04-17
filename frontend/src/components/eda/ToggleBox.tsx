import { CheckMark } from './ShapeIcons'

const ToggleBox: React.FC<{
  name: string
  isSelected: boolean
  onToggle: () => void
}> = ({ name, isSelected, onToggle }) => {
  return (
    <li className="flex items-center gap-3">
      <button
        onClick={onToggle}
        className={`w-6 h-6 rounded border-2 flex items-center justify-center
          ${
            isSelected
              ? 'bg-green-500 border-green-500 text-white'
              : 'bg-white border-gray-400'
          }
        `}
      >
        {isSelected && <CheckMark className="w-6 h-6" />}
      </button>
      <span className="text-sm">{name}</span>
    </li>
  )
}

export default ToggleBox
