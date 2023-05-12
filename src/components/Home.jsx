import React, { useContext, useEffect, useState } from "react";
import { MAIN_URL } from "../utils";
import Loader from "../loader.gif";
import { ContextN121 } from "../context";

const Home = () => {
  const [data, setData,likedProducts,setLikedproducts] = useContext(ContextN121);

  useEffect(() => {
    fetch(MAIN_URL + "/products")
      .then((res) => res.json())
      .then((arr) => setData(arr));
  }, []);



  const dislikeProducts = ({ id })=> {
    
    const newData = data?.map((product) => {
      if(product.id === id){
        setLikedproducts((p) => [...p, {...product,liked: false}]);
        return{...product,liked: true}
      }else return product; 
    });
    setData(newData);
  };

  const likeProducts = ({ id })=> {
    const newData = data?.map((product) => {
      if(product.id === id){
        setLikedproducts((p) => [...p, {...product,liked: true}]);
        return{...product,liked: true}
      }else return product; 
    }
    );
  setData(newData);
  };
  return (
    <div className="container main-wrapper">
      {data.length > 1 ? (
        data?.map((product, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <div className="image-box">
              <img src={product.image} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.title.slice(0, 15)}</h5>
              <p className="card-text">{product.description.slice(0, 40)}</p>
              <div className="d-flex gap-2">
                <button className="btn btn-primary">{product.price}$</button>
                {product.liked !== true? <button className="btn btn-dark ml-3" onClick={()=> likeProducts(product)}>❤️</button>: <button className="btn btn-dark ml-3" onClick={()=> dislikeProducts(product)}>❤️‍🔥</button>}
               
              </div>
            </div>
          </div>
        ))
      ) : (
        <img width="100px" src={Loader} alt="" />
      )}
    </div>
    
  );
};

export default Home;
