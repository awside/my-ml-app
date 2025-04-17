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
        {isSelected && (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            strokeWidth="4"
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
      <span className="text-sm">{name}</span>
    </li>
  )
}

export default ToggleBox
