import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

  const userId = 10;

  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/users">Users</Link>
      <br />
      <Link to={`/users/${userId}`}>Usuario</Link>
    </div>
  )
}

export default HomePage