import Child2 from './Child2'
import useApp from '../customehooks/useApp'
function Child1() {
      let {add,mult} = useApp();
      let ans =add(5,5)
      let ans2 = mult(5,5)
  return (
    <div> <p> add {ans}</p>
     <p> mult {ans2}</p>
      <Child2/>
    </div>
  )
}

export default Child1
