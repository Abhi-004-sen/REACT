import React, { useEffect, useState } from "react";
import Card from "./Card";


function App() {
  const [id, setId] = useState(1);
  const [data, setData] = useState();

  async function apiCall(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log("getting error");
    }
  }

  useEffect(() => {
    apiCall(`https://fakestoreapi.com/products/${id}`);
  }, [id]);
  
  function increment() {
    if (id >= 20) {
      setId(1);
      return;
    }
    setId(id + 1);
  }

  function decrement() {
    if (id <= 1) {
      setId(20);
      return;
    }
    setId(id - 1);
  }

  return (
    <div className="app-container">
      <button className="nav-btn" onClick={decrement}>
        &lt;
      </button>

      {data ? <Card product={data} /> : <p>Loading...</p>}

      <button className="nav-btn" onClick={increment}>
        &gt;
      </button>
    </div>
  );
}

export default App;
