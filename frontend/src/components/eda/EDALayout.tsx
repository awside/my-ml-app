import { useState } from 'react'
import FactorSelector from './FactorSelector'
import GraphDisplay from './GraphDisplay' // hypothetical graph

const EDALayout = () => {
  const [selectedColumns, setSelectedColumns] = useState<Set<string>>(new Set())

  return (
    <div className="p-6 space-y-6">
      <FactorSelector
        selected={selectedColumns}
        setSelected={setSelectedColumns}
      />
      <GraphDisplay columns={[...selectedColumns]} />
    </div>
  )
}

export default EDALayout
