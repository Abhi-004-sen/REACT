import React from 'react'
import {lg,sp,user} from"../assests/*"

function Navbar() {
  return (
    <div>
      <div>
            <img src={lg} alt="" />
            <img src={sp} alt="" />
            <img src={user} alt="" />
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
      </div>
    </div>
  )
}

export default Navbar
