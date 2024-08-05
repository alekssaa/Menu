import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories.js";
import Menu from "./Menu.js";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => {
        return item.category === category;
      });
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
