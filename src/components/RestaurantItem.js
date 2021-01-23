import React from "react";
import { Icon } from "rsuite";

const RestaurantItem = ({
  img = "https://static.riviu.co/320/image/2021/01/09/292dd25aa091bfd748dfa955b40cb5ee_output.jpeg",
  title = "Ding tea -hang than",
  address = "27 Hàng Than, Phường Nguyễn Trung Trực, Quận Ba Đình, Hà Nội ",
  star = "5",
}) => {
  return (
    <div className="board-item">
    <div className="img-wrap">
    <img src={img} alt="img-alt" />
    </div>
    <div className="restaurant-item">
          <span>{title}</span>
          {address}
          <span className="board-rate">
          <Icon icon='star'/> <span style={{fontWeight:'bold', marginRight:"5px", fontSize:"1.4rem"}}>{star}</span> / 5 diem
          </span>
      </div>
    </div>
  );
};

export default RestaurantItem;
