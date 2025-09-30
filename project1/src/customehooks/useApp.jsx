import React from 'react'

function useApp() {
      function add(x,y){
            return x+y;
      }
      function sub(x,y){
            return x-y;
      }
      function mult(x,y){
            return x*y;
      }
      function div(x,y){
            return x/y;
      }
  return {add,sub,mult,div};
}

export default useApp
