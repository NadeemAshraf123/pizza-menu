import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Pizza from "./Pizza";
import Footer from "./Footer";
import PizzaList from "./PizzaList";

const ParentPizza = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        price={12}
      />
      <Pizza
        name="Pizza focaccia"
        ingredients="Tomato, mushrooms"
        photoName="pizzas/focaccia.jpg"
        price={14}
      />
      <Pizza
        name="Pizza margherita"
        ingredients="Tomato, mushrooms"
        photoName="pizzas/margherita.jpg"
        price={15}
      />
      <Pizza
        name="Pizza prosciutto"
        ingredients="Tomato, mushrooms"
        photoName="pizzas/prosciutto.jpg"
        price={18}
      />
      <Pizza
        name="Pizza salamino"
        ingredients="Tomato, mushrooms"
        photoName="pizzas/salamino.jpg"
        price={20}
      />
      <PizzaList />
      <Footer />
    </div>
  );
};

export default ParentPizza;
