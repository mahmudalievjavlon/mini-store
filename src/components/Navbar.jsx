import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextN121 } from "../context";

const Navbar = () => {
  const [data,_,likedProducts] = useContext(ContextN121);

  return (
    <header>
      <nav>
        <div className="container">
          <div className="wrapper">
            <NavLink className="link" to="/">
              Logo.uz
            </NavLink>
            <div className="items">
              <NavLink className="link position-relative" to="/liked">
                Liked
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {likedProducts.length}
                </span>
              </NavLink>
              <div className="products">Products: {data.length}</div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
