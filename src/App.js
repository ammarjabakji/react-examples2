import React, { Component } from 'react'
import './App.css'
import { GithubCards } from './components/githubCards'

const testData = [
  {
    id: '1',
    name: 'Dan Abramov',
    avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4',
    company: '@facebook'
  },
  {
    id: '2',
    name: 'Sophie Alpert',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4',
    company: 'Humu'
  },
  {
    id: '3',
    name: 'Sebastian Markbåge',
    avatar_url: 'https://avatars2.githubusercontent.com/u/63648?v=4',
    company: 'Facebook'
  }
]

export default class App extends Component {
  state = {
    testData
  }
  addNewProfile = profileData => {
    this.setState(prevState => ({
      testData: [...prevState.testData, profileData]
    }))
  }
  render() {
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
}
