import { useState } from 'react'
import FactorSelector from './FactorSelector'
import ShapeDisplay from './ShapeDisplay'

const EDALayout = () => {
  const [selectedNumerical, setSelectedNumerical] = useState<Set<string>>(
    new Set()
  )
  const [selectedCategorical, setSelectedCategorical] = useState<Set<string>>(
    new Set()
  )

  return (
    <div className="p-6 space-y-6">
      <ShapeDisplay />
      <FactorSelector
        selectedNumerical={selectedNumerical}
        setSelectedNumerical={setSelectedNumerical}
        selectedCategorical={selectedCategorical}
        setSelectedCategorical={setSelectedCategorical}
      />
    </div>
  )
}

export default EDALayout
