import React, { useState } from 'react'
import axios from 'axios'

const GithubForm = ({ addCard }) => {
  const [Name, setName] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    const resp = await axios.get(`https://api.github.com/users/${Name}`)
    addCard(resp.data)
    setName('')
    console.log(Name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={Name}
        onChange={e => setName(e.target.value)}
        placeholder="GitHub username"
        required
      />
      <button>Add card</button>
    </form>
  )
}

export default GithubForm
