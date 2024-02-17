import React from 'react'
import {  useParams } from 'react-router-dom'
const UsersPage = () => {
    const {name} = useParams()
    // const {name}=params
  return (
    <div>
      <h1>This is {name} profile</h1>
    </div>
  )
}

export default UsersPage
