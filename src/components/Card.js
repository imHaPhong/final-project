import React from "react";
import { Icon } from "rsuite";

const Card = ({img, discription, title, author, like}) => {
  return (
    <div className="card">
      <div className="card-img">
        <img
          src={img}
          alt=""
        />
        <span className="card-description">
            <Icon icon="bookmark"/>
          {discription}
        </span>
      </div>
      <div className="card-title s-title">
        {title}
      </div>
      <div className="cart-bottom">
        <div className="author">{author}</div>
        <div className="like">
          <Icon icon="heart" />
          {like}
        </div>
      </div>
    </div>
  );
};

export default Card;
