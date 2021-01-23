import React from "react";
import { Icon } from "rsuite";
import SearchDropDown from "../SearchDropDown";

const index = () => {
  return (
    <header>
      <nav>
        <h1>Review</h1>
        <div className="input-search">
          <SearchDropDown />
        </div>
        <div className="nav-left">
          <Icon icon="bell" style={{ fontSize: "20px", color: "violet" }} />
          <div className="upload">
            <Icon icon="plus" style={{ fontSize: "20px" }} />
            <span>Upload</span>
          </div>
          <div className="me">Me</div>
        </div>
      </nav>
    </header>
  );
};

export default index;
