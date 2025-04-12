import { ResponsiveTree } from '@nivo/tree'

export type TreeNode = {
  id: string
  name: string
  color: string
  children?: TreeNode[]
  loc?: number // required by Nivo tree leaves
}

function getRandomColor(): string {
  const hue = Math.floor(Math.random() * 360)
  return `hsl(${hue}, 70%, 50%)`
}

export function generateBinaryTree(
  levels: number,
  prefix = 'Node',
  currentLevel = 1
): TreeNode {
  const id = `${prefix}-${currentLevel}`
  const node: TreeNode = {
    id,
    name: id,
    color: getRandomColor(),
  }

  if (currentLevel < levels) {
    node.children = [
      generateBinaryTree(levels, `${prefix}L`, currentLevel + 1),
      generateBinaryTree(levels, `${prefix}R`, currentLevel + 1),
    ]
  } else {
    node.loc = 0 // leaf node value
  }

  return node
}

export default function DecisionTree({ data }: { data: TreeNode }) {
  return (
    <div style={{ height: 600 }}>
      <ResponsiveTree
        data={data}
        identity="name"
        nodeColor={(node) => (node.data as TreeNode).color}
        activeNodeSize={24}
        inactiveNodeSize={12}
        fixNodeColorAtDepth={2}
        linkThickness={6}
        activeLinkThickness={8}
        inactiveLinkThickness={2}
        linkColor={{
          from: 'target.color',
          modifiers: [['opacity', 0.4]],
        }}
        margin={{ top: 90, right: 90, bottom: 90, left: 90 }}
        motionConfig="stiff"
        meshDetectionRadius={80}
        label={(d) => (d.data as TreeNode).name}
        linkTooltip={() => null}
        onLinkMouseEnter={() => {}}
        onLinkMouseMove={() => {}}
        onLinkMouseLeave={() => {}}
        onLinkClick={() => {}}
        linkTooltipAnchor="top"
      />
    </div>
  )
}
