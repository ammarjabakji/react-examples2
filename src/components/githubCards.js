import React, { useState } from 'react'
import GithubForm from './githubForm'
import { CardList } from './CardList'

const DefaultData = [
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

export const GithubCards = ({ title }) => {
  const [data, setData] = useState(DefaultData)
  const addNewProfile = profileData => {
    setData([...data, profileData])
  }
  return (
    <div>
      <div className="header">{title}</div>
      <GithubForm addCard={addNewProfile} />
      <CardList profiles={data} />
    </div>
  )
}
