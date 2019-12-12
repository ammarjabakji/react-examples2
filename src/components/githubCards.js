import React from 'react'

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

const CardList = () => (
  <div>
    {testData.map(profile => (
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

// class Card extends React.Component {
//   render() {
//     const profile = this.props
//     return (
//       <div className="github-profile">
//         <img src={profile.avatar_url} alt="" />
//         <div className="info">
//           <div className="name">{profile.name}</div>
//           <div className="company">{profile.company}</div>
//         </div>
//       </div>
//     )
//   }
// }

// this code is using functional components and much simpler than the above code
const Card = ({ name, avatar_url, company }) => (
  <div className="github-profile">
    <img src={avatar_url} alt="" />
    <div className="info">
      <div className="name">{name}</div>
      <div className="company">{company}</div>
    </div>
  </div>
)

export const GithubCards = ({ title }) => {
  return (
    <div>
      <div className="header">{title}</div>
      <CardList />
    </div>
  )
}
