import React from 'react'
import Navbar from './Navbar.jsx';
import CardContainer from './CardContainer.jsx';
function MainContainer() {
  return (
    <div className='maincontainer'>
      <p>this is main container</p>
      <Navbar></Navbar>
     <CardContainer/>
    </div>
  )
}

export default MainContainer
