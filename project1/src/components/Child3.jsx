import React, { useContext } from 'react';
import { myContext } from '../App';

function Child3() {
  const { data, setData } = useContext(myContext);

  return (
    <div>
      <h2>Child3 Component</h2>
      <p>Current Data: {data}</p>
      <button onClick={() => setData("Updated from Child3")}>
        Change Data
      </button>
    </div>
  );
}

export default Child3;
