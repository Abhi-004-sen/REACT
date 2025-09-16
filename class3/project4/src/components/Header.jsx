import React, { useEffect, useState } from "react";
import axios from "axios";
import Headerprops from "./Headerprops";
function Header() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://free-food-menus-api-two.vercel.app/bbqs").then((res) => {
      console.log(res.data);
       setProducts(res.data);
    });
   
  },[]);
  return (

    <div className="design">
     
      {products.map((p , index) => {
        return <Headerprops  key={index}
         id = {p.id}
            image = {p.img}
            name = {p.name}
            Discription = {p.dsc}
            Price = {p.price}
        />

      })}
    </div>
      );
}

export default Header;
