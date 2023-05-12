import React, { createContext, useState } from "react";

export const ContextN121 = createContext([]);

const ContextComp = ({ children }) => {
  const [data, setData] = useState([]);
  const[likedProducts, setLikedproducts] = useState([]);

  return (
    <ContextN121.Provider value={[data, setData,likedProducts,setLikedproducts]}>
      {children}
    </ContextN121.Provider>
  );
};

export default ContextComp;
