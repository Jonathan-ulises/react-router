import React from 'react'
import { useParams } from 'react-router-dom';

const UserPage = () => {

  // Recuperamos y desestructuramos los parametros 
  const { id } = useParams();

  return (
    <div>
      <h1>User</h1>
      <p>id = {`${id}`}</p>
    </div>
  )
}

export default UserPage