import React from "react";
import "./Card.css"; 

function Card({ product }) {
  return (
    <>
   
      <div className="card">
        <img src={product?.image} alt="img" className="card-img" />
        <div className="card-body">
          <h2 className="card-title">{product?.title}</h2>
          <p className="card-price">₹{product?.price}</p>
          <p className="card-description">{product?.description.substr('10')}</p>
          <div className="card-rate">
            <span>{product?.rate}</span>
          </div>
          <button className="card-btn">Add to Cart</button>
        </div>
      </div>
      
    </>
  );
}

export default Card;
