import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { categories } from "../../Data/navbarData";

const Navbar = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  const { BASKET } = useSelector((state) => state.cardShope);
  return (
    <div className="navbar">
      <Link className="link" to="/">
        <h1 className="navbar-header">Ecommerce</h1>
      </Link>
      <nav className="navbar-nav">
        <ul className="navbar-list">
          {items &&
            items.map((item, index) => (
              <li
                className="navbar-item"
                key={index}
                onMouseMove={() => {
                  if (item == "categories") {
                    setDropdown(true);
                  }
                }}
                onMouseLeave={() => {
                  if (item == "categories") {
                  }
                }}
              >
                <Link className="link" to={`/${item}`}>
                  {item}
                </Link>
                {dropdown && item == "categories" && (
                  <div
                    onMouseMove={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                    className="dropdown-content"
                  >
                    <ul>
                      {categories &&
                        categories.map((category, index) => (
                          <li onMouseMove={()=> {
                            
                          }}key={index}>{category}</li>
                        ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
        </ul>
        <div className="card-shop">
          <Link className="link" to="/shopcart">
            <AiOutlineShoppingCart className="card-shop-icon" />
            <span>{BASKET.count}</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
