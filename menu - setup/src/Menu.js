import React from "react";
const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { price, img, title, id, desc } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} className="photo" />
            <header>
              <h4> {title}</h4>
              <h4 className="price"> ${price}</h4>
              <p className="item-text">{desc}</p>
            </header>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
