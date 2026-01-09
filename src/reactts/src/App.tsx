import './App.css'
import { Coffe } from './components/Coffe.tsx'
import { Counter } from './components/Counter.tsx'

function App() {
  return (
    <>
    <div>
      <h1>Vite + React</h1>
      <Coffe
        name="Cappuccino"
        price="$3.50"
        isSpecial={true}
      />
      </div>
      <div>
        <Counter />
      </div>
    </>
  )
}

export default App
