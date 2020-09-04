import React from "react";
import "./Price.css";
const Price = ({ pkgName, pkgPrice, item1, item2, item3, item4,isMiddleButton}) => {

let button = 'button';
if(isMiddleButton){
    button = 'middle__button';
}
  

  return (
      <div className="price__second-part">
        <div className="second-part__single-div">
          <div className="second-part__upper-line"></div>
          <h2>{pkgName}</h2>
          <h1>{pkgPrice}</h1>
          <ul className="single-div__list">
            <li>
              <h3>{item1}</h3>
            </li>
            <li>
              <h3>{item2}</h3>
            </li>
            <li>
              <h3>{item3}</h3>
            </li>
            <li>
              <h3>{item4}</h3>
            </li>
          </ul>
          <button className={button}>Buy Plan</button>
        </div>
      </div>
  );
};

export default Price;
