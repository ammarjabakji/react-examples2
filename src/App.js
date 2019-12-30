import React, { useState } from 'react'
import './App.css'
import { GithubCards } from './components/githubCards'

export const App = () => {
  const [data, setData] = useState({
    id: '',
    name: '',
    avatar_url: '',
    company: ''
  })
  return (
    <div className="App">
      <GithubCards
        testData={this.state.testData}
        onSubmit={this.addNewProfile}
        title="The GitHub Cards App"
      />
    </div>
  )
}
