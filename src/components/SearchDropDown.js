import React, { useState } from "react";
import { Icon } from "rsuite";

const SearchDropDown = () => {

    const [isOpen, setIsopen] = useState(false)
    const [input, setInput] = useState("")

    const [listCity, setListCity] = useState(["Ha noi", "HCM", "Can Tho", "Ca Mau"])

    const onInputChange = (e) => {
        setInput(e.target.value)
        const str = e.target.value
        if(str !== "") {
            const result =  listCity.filter(el => el.trim().toLowerCase().includes(str.toLowerCase().trim()))
            setListCity(result)
        }
        if(str === "") {
            setListCity(["Ha noi", "HCM", "Can Tho", "Ca Mau"])
        }
    }

    const toggle = () => {
        setIsopen(!isOpen)
    }
  return (
    <>
      <div className="search-content">
        <div className="drop-box" >
          <div onClick={toggle}>
          <span>Ha Noi</span>
          <Icon icon="arrow-down" />
          </div>
          {isOpen && 
          <div className="drop-menu">
          <div className="drop-item">
            <div>
              <div className="search-group">
                  <Icon icon="search"/>
                  <input type="text" value={input} onChange={onInputChange} placeholder="Find city ... "/>
              </div>

              <ul className="cities">
                  {listCity.map((el, index) => <li className="city" key={index}>{el}</li>)}
              </ul>
            </div>
          </div>
        </div>}
        </div>
        <input placeholder="an gi , odau" />
        <Icon icon="search" className="search-icon" />
      </div>
    </>
  );
};

export default SearchDropDown;
