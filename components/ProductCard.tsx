"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Product, getWhatsAppUrl } from "@/data/menu";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--tilt-x", `${(0.5 - y) * 8}deg`);
    el.style.setProperty("--tilt-y", `${(x - 0.5) * 10}deg`);
    el.style.setProperty("--shine-x", `${x * 100}%`);
    el.style.setProperty("--shine-y", `${y * 100}%`);
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="product-card group relative flex min-w-[245px] flex-col overflow-hidden rounded-md border border-border bg-card transition-all md:min-w-0"
    >
      <div className="card-shine" aria-hidden="true" />
      <div className="product-image relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={`${product.name}, imagem conceitual`}
          width={912}
          height={912}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute right-3 top-3 rounded bg-primary px-2 py-1 text-[9px] font-extrabold uppercase text-primary-foreground shadow">
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-xl font-bold uppercase">{product.name}</h3>
        <p className="mt-1 min-h-12 text-[11px] leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <strong className="text-sm font-bold text-primary">{product.price}</strong>
          <a
            href={getWhatsAppUrl(product.name)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-3 text-[9px] font-medium uppercase text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Adicionar <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  );
}
