import { ColumnList } from '../components/ui/ColumnList'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">EDA Dashboard</h1>
      <ColumnList />
    </div>
  )
}
