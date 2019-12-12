import React from 'react'
import './App.css'
import { Example } from './components/example'

const Lake = ({ name }) => <h1>{name}</h1>
const Lakes = () => (
  <div>
    <Lake name="lake Tueje" />
    <Lake name="lake Kufoe" />
    <Lake name="lake Zirha" />
  </div>
)

function App() {
  return (
    <div className="App">
      <h1>Example 1</h1>
      <Lakes />
      <Example />
    </div>
  )
}

export default App
