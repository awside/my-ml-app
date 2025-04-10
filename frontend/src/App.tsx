import DecisionTree, { generateBinaryTree } from './components/DecisionTree'

const treeData = generateBinaryTree(10) // 10 levels

function App() {
  return (
    <div className="p-6">
      <DecisionTree data={treeData} />
    </div>
  )
}

export default App
