import React from 'react'

function Headerprops( {Discription, id,name,image,price}) {
  return ( 
    <div className='card'>
      <img src={image} alt="" />
      <h2> Id : {id}</h2>
      <p>Name: {name}</p>
      <p>Discription : {Discription}</p>
      <p>Price : {price}</p>

    </div>
    

  )
}

export default Headerprops
