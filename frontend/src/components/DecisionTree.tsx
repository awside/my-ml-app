// src/components/DecisionTree.tsx
import { useRef, useState, useEffect } from 'react'
import Tree from 'react-d3-tree'

type TreeNode = {
  name: string
  children?: TreeNode[]
}

interface DecisionTreeProps {
  data: TreeNode
}

export default function DecisionTree({ data }: DecisionTreeProps) {
  const treeContainer = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })

  useEffect(() => {
    if (treeContainer.current) {
      const { offsetWidth, offsetHeight } = treeContainer.current
      setDimensions({ width: offsetWidth, height: offsetHeight })
    }
  }, [])

  return (
    <div ref={treeContainer} style={{ width: '100%', height: '600px' }}>
      <Tree
        data={data}
        translate={{ x: dimensions.width / 2, y: 50 }}
        orientation="vertical"
        pathFunc="diagonal"
        separation={{ siblings: 1, nonSiblings: 2 }}
        zoomable
        zoom={0.7}
        collapsible
        nodeSize={{ x: 200, y: 100 }}
      />
    </div>
  )
}

export function generateBinaryTree(
  levels: number,
  prefix = 'Node',
  currentLevel = 1
): TreeNode {
  const node: TreeNode = {
    name: `${prefix}-${currentLevel}`,
  }

  if (currentLevel < levels) {
    node.children = [
      generateBinaryTree(levels, `${prefix}L`, currentLevel + 1),
      generateBinaryTree(levels, `${prefix}R`, currentLevel + 1),
    ]
  }

  return node
}
