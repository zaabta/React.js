import React from "react";
import { useParams } from "react-router-dom";
import "./Shopcard.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import testedData from "../../Data/testedData.json";
import ListCard from "../ListCard/ListCard";

const Shopcard = () => {
  const { product } = useParams();

  const item =
    testedData[testedData.findIndex((item) => item.title.includes(product))];
  return (
    <div className="shop-card-main">
      <Link className="btn back-btn" to="/">
        back
      </Link>{ item &&
          <ListCard list={[item]}/>
      }
    </div>
  );
};

export default Shopcard;
