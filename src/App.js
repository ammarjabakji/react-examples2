import React, { Component } from 'react'
import './App.css'
import { GithubCards } from './components/githubCards'

const testData = [
  {
    name: 'Dan Abramov',
    avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4',
    company: '@facebook'
  },
  {
    name: 'Sophie Alpert',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4',
    company: 'Humu'
  },
  {
    name: 'Sebastian Markbåge',
    avatar_url: 'https://avatars2.githubusercontent.com/u/63648?v=4',
    company: 'Facebook'
  }
]

export default class App extends Component {
  state = {
    testData
  }
  render() {
    return (
      <div className="App">
        <GithubCards
          testData={this.state.testData}
          title="The GitHub Cards App"
        />
      </div>
    )
  }
}
