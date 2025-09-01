import { Link } from 'react-router-dom'
import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/job-app-tool">Job App Tool Page</Link>
    </nav>
  )
}