import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav'>
      <ul>
            <li>Home</li>
            <li> <Link to = "/login">Login</Link> </li>
            <li>Register</li>
            <li>Contact</li>
            <li>Phone</li>
      </ul>
      
    </div>
  )
}

export default Navbar
