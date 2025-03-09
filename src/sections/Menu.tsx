import React from "react";
import { MenuCarousel, Card } from "@/components/menu-carousel";
import menuCategories from "@/lib/menuCategories";

const Menu = () => {
  const cards = menuCategories.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full h-full" id="menu">
      <h2 className="max-w-7xl pl-4 mx-auto text-4xl lg:text-6xl text-neutral-800 dark:text-neutral-200 font-secondary">
        Menü.
      </h2>
      <MenuCarousel items={cards} />
    </section>
  );
};

export default Menu;
