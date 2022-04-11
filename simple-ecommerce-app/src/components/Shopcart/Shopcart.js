import React from "react";
import "./Shopcart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListCard from "../ListCard/ListCard";

const Shopcart = () => {
  const { BASKET } = useSelector((state) => state.cardShope);
  // restructure the data
  const ShopcartData = [];
  BASKET.products.map((product) => {
    ShopcartData.push(product.product);
  });
  const ShopcartDataCount = [];
  BASKET.products.map((product) => {
    ShopcartDataCount.push(product.count);
  });

  return (
    <div className="shop-card">
      <Link className="btn back-btn" to="/">
        back
      </Link>
      <ListCard list={ShopcartData} data={BASKET.products} />
      <p className="total">
        TOTAL:{(Math.round(BASKET.total * 100) / 100).toFixed(2)}$
      </p>
    </div>
  );
};

export default Shopcart;
