import React from 'react'
{/*[]-dynamic*/}
const Meeting = ({params}: {params: {id: string}}) => {
  return (
    <div>
      <h1>Meeting ID: {params.id}</h1>
    </div>
  )
}

export default Meeting
