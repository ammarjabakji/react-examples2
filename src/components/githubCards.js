import React, { Component } from 'react'
import axios from 'axios'

const CardList = ({ profiles }) => (
  <div>
    {profiles.map(profile => (
      <Card key={profile.id} {...profile} />
    ))}
  </div>
)

const Card = ({ name, avatar_url, company }) => (
  <div className="github-profile">
    <img src={avatar_url} alt="" />
    <div className="info">
      <div className="name">{name}</div>
      <div className="company">{company}</div>
    </div>
  </div>
)
class Form extends Component {
  state = { userName: '' }
  handleSubmit = async event => {
    event.preventDefault()
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    )
    this.props.onSubmit(resp.data)
    this.setState({ userName: '' })
    console.log(this.state.userName)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        />
        <button>Add card</button>
      </form>
    )
  }
}

export const GithubCards = ({ title, testData, onSubmit }) => {
  return (
    <div>
      <div className="header">{title}</div>
      <Form onSubmit={onSubmit} />
      <CardList profiles={testData} />
    </div>
  )
}
