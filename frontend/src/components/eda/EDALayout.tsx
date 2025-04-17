import { useState } from 'react'
import FactorSelector from './FactorSelector'
import ShapeDisplay from './ShapeDisplay'

const EDALayout = () => {
  const [selectedColumns, setSelectedColumns] = useState<Set<string>>(new Set())

  return (
    <div className="p-6 space-y-6">
      <ShapeDisplay />
      <FactorSelector
        selected={selectedColumns}
        setSelected={setSelectedColumns}
      />
    </div>
  )
}

export default EDALayout
