"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/data/menu";
import { ProductCard } from "@/components/ProductCard";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<"Burgers" | "Acompanhamentos" | "Bebidas">("Burgers");

  const categories: Array<"Burgers" | "Acompanhamentos" | "Bebidas"> = [
    "Burgers",
    "Acompanhamentos",
    "Bebidas",
  ];

  const filteredProducts = PRODUCTS.filter((item) => item.category === activeCategory);

  return (
    <section data-reveal="true" id="cardapio" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="font-display text-sm font-bold italic uppercase text-primary">
            Destaques do nosso
          </p>
          <h2 className="display-type text-5xl md:text-7xl">Cardápio</h2>
        </div>

        <div role="tablist" aria-label="Categorias" className="flex gap-5 overflow-x-auto border-b border-border">
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`h-8 border-b-2 px-1 text-[10px] font-bold uppercase transition-colors ${
                activeCategory === category
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7 flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible">
        {filteredProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
