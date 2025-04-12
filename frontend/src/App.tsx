import DecisionTree, { generateBinaryTree } from './components/DecisionTree'

function App() {
  return (
    <div className="p-6">
      <DecisionTree data={generateBinaryTree(6)} />
    </div>
  )
}

export default App
