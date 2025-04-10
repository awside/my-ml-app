import SimpleBarChart from './components/SimpleBarChart';
import MessageFetcher from './components/MessageFetcher';

function App() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">My TSX Bar Chart</h1>
      <SimpleBarChart
        data={[
          { name: 'Group A', value: 7 },
          { name: 'Group B', value: 18 },
          { name: 'Group C', value: 5 },
        ]}
      />
      <MessageFetcher />
    </div>
  );
}

export default App;
