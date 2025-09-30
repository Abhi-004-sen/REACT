import React, { use, useContext } from 'react'
import { myContext } from '../App';
import Child3 from './Child3';
import useApp from '../customehooks/useApp';

function Child2() {
  const {fname }= useContext(myContext); 
  const {div , sub}= useApp()
  let ans = div(10,2)
  let ans2 = sub(10,5)
  

  return (
    <div>
      <h3>Child2 Component {fname}</h3>
      <p>div (10,2) {ans}</p>
      <p> sub (10,5) {ans2}</p>
      <h2> this is child 3 data</h2>
      <p></p>
      <Child3/>
    </div>
  )
}

export default Child2;
  