import React from 'react'
import './App.css'
import { Example } from './components/simplehook'
import { Example2 } from './components/separation'

function App() {
  return (
    <div className="App">
      <h1>Example 1</h1>
      <Example />
      <hr />
      <h1>Example 2</h1>
      <Example2 />
    </div>
  )
}

export default App
