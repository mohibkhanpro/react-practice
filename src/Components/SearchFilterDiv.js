import React from 'react'

function SearchFilterDiv(props) {
  return (
    <>
      <p>{props.data.email}</p>
      <h5>{props.data.name}</h5>
    </>
  )
}

export default SearchFilterDiv
