import React from 'react'

export const CardList = ({ profiles }) => {
  return (
    <div>
      {profiles.map(profile => (
        <div key={profile.id} className="github-profile">
          <img src={profile.avatar_url} alt="" />
          <div className="info">
            <div className="name">{profile.name}</div>
            <div className="company">{profile.company}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
