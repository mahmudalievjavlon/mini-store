import React, { useContext } from 'react'
import { ContextN121 } from '../context'

const Liked = () => {
  const [data,setData, likedProducts,setLikedproducts] = useContext(ContextN121)

  const remove = ({ id })=> {
    
    const a = likedProducts.filter((val) => val.id !== id);
    setLikedproducts(a);
  };
  return (
    <div className="container main-wrapper">
      {likedProducts.length >= 1 ? (
        likedProducts?.map((product, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <div className="image-box">
              <img src={product.image} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.title.slice(0, 15)}</h5>
              <p className="card-text">{product.description.slice(0, 40)}</p>
              <div className="d-flex gap-2">
                <button className="btn btn-primary">{product.price}$</button>
                {product.liked === true&& <button className="btn btn-danger" onClick={()=>remove(product)}> 🗑</button>}
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>no liked products</h1>
      )}
    </div>
  )
}

export default Liked