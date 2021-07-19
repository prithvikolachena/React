import React, { useState } from 'react';
import items from './data.js';
import Categories from './Categories.js';
import Menu from './Menu.js';
import './App.css';
import menu from './data.js';

const allCategories = ['all',...new Set(items.map((item) => item.category))] 
console.log(allCategories);

function App() {
  const [menuitems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all')
    {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='menu-section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items = {menuitems} />
      </section>
    </main>
  );
}

export default App;
