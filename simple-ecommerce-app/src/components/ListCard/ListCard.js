import React from "react";
import "./ListCard.css";
import Card from "../Card/Card";


const ListCard = ({list, data}) => {

  return (
    <div className="list-card">
      {list &&
        list.map((item, index) => (
          <div className="list-item" key={item.id}>
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
              id={item.id}
              count={data && data.map(d=> {
                if(d.product.id == item.id)
                  return d.conut;
              })}
            />
          </div>
        ))}
    </div>
  );
};

export default ListCard;
