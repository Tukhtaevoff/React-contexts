import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const Navigate = useNavigate();
  return (
    <>
    <h1>This is About page!</h1>
    <button onClick={() => Navigate("/home")}>Go back</button>
    </>
  )
}

export default About