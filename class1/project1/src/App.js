import { useState } from "react";
import './App.css';



function App() {
  const [user , setFname] = useState({
    id : 1,
    fname : "abhishek",
    lname : "sen",
    city : "indore"
  }
  )
  function changeId(){
   
    setFname({...user, city : "khalghat"})
     setFname({...user,id : 2})
   }
 
  return  (
    <div >
    <p >Name : {user.fname}</p>
    <p>Last-Name : {user.lname}</p>
    <p>Id : {user.id}</p>
    <p>City : {user.city}</p>
    <button onClick={changeId}>change id</button>
    </div>
  )
}

export default App;
