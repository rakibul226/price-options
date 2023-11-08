
import './App.css'
import LineChart from './component/LineChart/LineChart'
import Navbar from './component/Navbar'
import PriceOptions from './component/price/PriceOptions'
// import DaisyNav from './component/DaisyNav'


function App() {


  return (
    <div >

      {/* <DaisyNav></DaisyNav> */}

      <Navbar></Navbar>
      <h1>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
     
    </div>
  )
}

export default App
