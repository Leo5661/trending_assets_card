import { DataSets } from './datasets'
import Card from './components/Card'

function App() {

  return (
    <div className="App bg-blue w-full min-h-screen flex justify-around items-center flex-wrap">
      {DataSets.map((data, index) => {
        return (
          <Card 
            key={index} 
            logo={data.logo}
            name={data.name} 
            price={data.price} 
            changePercent={data.changePercent} 
            tvl={data.tvl} 
            pairings={data.pairings} 
            />
        )
      })}
    </div>
  )
}

export default App
