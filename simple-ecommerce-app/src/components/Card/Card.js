import React, { useState } from "react";
import "./Card.css";
import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ id, title, price, image, description, count }) => {
  const dispatch = useDispatch();
  const [descriptionText, setDescriptionText] = useState(
    description.substring(0, description.length / 2)
  );
  const [more_less, setMore_less] = useState("more...");
  return (
    <div className="card">
      <label className="count">{count}</label>
      <Link className="link" to={`/${title}`}>
        <img className="card-img" src={image} alt={title} />
      </Link>
      <div className="card-content">
        <h4 className="card-name">{title}</h4>
        <p className="card-price">{price}$</p>
        <p className="card-text">
          {descriptionText}
          <span
            onClick={(e) => {
              if (more_less == "more...") {
                setDescriptionText(description);
                setMore_less("less...");
              } else {
                setDescriptionText(
                  description.substring(0, description.length / 2)
                );
                setMore_less("more...");
              }
            }}
          >
            {more_less}
          </span>
        </p>
      </div>
      {count ? (
        <div className="add-delet-btns">
          <AiFillDelete
            className={"btn card-btn"}
            onClick={() => {
              dispatch({
                type: "DELET",
                payload: {
                  id: id,
                  title: title,
                },
              });
            }}
          />
          <AiOutlineShoppingCart
            className={"btn card-btn"}
            onClick={() => {
              dispatch({
                type: "ADD",
                payload: {
                  image: image,
                  id: id,
                  title: title,
                  price: price,
                  description: description,
                },
              });
            }}
          />
        </div>
      ) : (
        <AiOutlineShoppingCart
          className={"btn card-btn"}
          onClick={() => {
            dispatch({
              type: "ADD",
              payload: {
                image: image,
                id: id,
                title: title,
                price: price,
                description: description,
              },
            });
          }}
        />
      )}
    </div>
  );
};

export default Card;
