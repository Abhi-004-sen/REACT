import React, { createContext, useState } from 'react'
import Child1 from './components/Child1'
import Child2 from './components/Child2';
import Child3 from './components/Child3';
export const myContext = createContext();

function App() {
  let fname = 'abhishek'
  const [data , setData ] = useState('anish')
  return (
   <myContext.Provider value={{fname,data,setData}}>
    <Child1/>
   </myContext.Provider>
  )
}

export default App
