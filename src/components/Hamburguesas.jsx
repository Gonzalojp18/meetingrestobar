import React from 'react';
import CategorySection from '../components/CategorySection';
import menuData from '../data/data';
import './Hamburguesas.css'
import burgerone from '../source/burgerandwraps/para.webp'

const Hamburguesas = () => {
  const hamburguesas = {
    "Acompañadas con papas rusticas": menuData["Hamburguesas"]
    // "SANDWICHES - PAN DE CIABATTA" : menuData["Nuestros Sandwiches"],
  };

  return (
    <section id="hamburguesas">
      <div className="box-burger p-2">
      <h1 className="font-bold">Hamburguesas Caseras 200gr</h1>
      </div>
      {Object.entries(hamburguesas).map(([category, items]) => (
        <CategorySection key={category} category={category} items={items} />
      ))}
            <img src={burgerone} alt="de la casa" />
    </section>
  );
};

export default Hamburguesas;