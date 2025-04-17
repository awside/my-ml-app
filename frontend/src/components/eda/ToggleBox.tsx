import React from 'react'

type ToggleBoxProps = {
  name: string
  isSelected: boolean
  onToggle: () => void
  color?: 'blue' | 'green'
}

const ToggleBox: React.FC<ToggleBoxProps> = ({
  name,
  isSelected,
  onToggle,
  color = 'blue',
}) => {
  const baseColor = color === 'green' ? 'green' : 'blue'

  return (
    <li className="flex items-center gap-3">
      <button
        onClick={onToggle}
        className={`w-6 h-6 rounded border-2 flex items-center justify-center
          ${
            isSelected
              ? `bg-${baseColor}-500 border-${baseColor}-500 text-white`
              : 'bg-white border-gray-400'
          }
        `}
      >
        {isSelected && (
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
      <span className="text-sm">{name}</span>
    </li>
  )
}

export default ToggleBox
