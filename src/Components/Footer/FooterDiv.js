import React from "react";

const FooterDiv = ({ title, item1, item2, item3, item4, item5, item6 }) => {
  return (
    <div>
      <ul className="footer__list">
        <li>
          <h1>{title}</h1>
        </li>
        <li>
          <a>{item1}</a>
        </li>
        <li>
          <a>{item2}</a>
        </li>
        <li>
          <a>{item3}</a>
        </li>
        <li>
          <a>{item4}</a>
        </li>
        <li>
          <a>{item5}</a>
        </li>
        <li>
          <a>{item6}</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterDiv;
