import React, { Component } from 'react'

const CardList = ({ profiles }) => (
  <div>
    {profiles.map(profile => (
      // <Card
      //   name={profile.name}
      //   avatar_url={profile.avatar_url}
      //   company={profile.company}
      // />

      // this code is equivalent to the above
      <Card {...profile} />
    ))}
  </div>
)

class Card extends Component {
  render() {
    // const profile = this.props
    //or more professional code
    const { avatar_url, name, company } = this.props
    return (
      <div className="github-profile">
        <img src={avatar_url} alt="" />
        <div className="info">
          <div className="name">{name}</div>
          <div className="company">{company}</div>
        </div>
      </div>
    )
  }
}

// this code is using functional components and much simpler than the above code
// const Card = ({ name, avatar_url, company }) => (
//   <div className="github-profile">
//     <img src={avatar_url} alt="" />
//     <div className="info">
//       <div className="name">{name}</div>
//       <div className="company">{company}</div>
//     </div>
//   </div>
// )
const Form = () => {
  return (
    <form action="">
      <input type="text" placeholder="GitHub username" />
      <button>Add card</button>
    </form>
  )
}

export const GithubCards = ({ title, testData }) => {
  return (
    <div>
      <div className="header">{title}</div>
      <Form />
      <CardList profiles={testData} />
    </div>
  )
}
