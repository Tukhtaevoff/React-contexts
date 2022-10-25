import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const Navigate = useNavigate();
  return (
    <>
    <h1>This is Contact page!</h1>
    <button onClick={() => Navigate("/home")}>Go back</button>
    </>
  )
}

export default Contact