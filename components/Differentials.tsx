import React from "react";
import { Beef, Wheat, Sparkles, Flame } from "lucide-react";

export function Differentials() {
  const items = [
    {
      icon: Beef,
      title: "Carne artesanal",
      description: "Selecionada e preparada na brasa.",
    },
    {
      icon: Wheat,
      title: "Pão fresco",
      description: "Produzido diariamente para mais sabor.",
    },
    {
      icon: Sparkles,
      title: "Ingredientes selecionados",
      description: "Qualidade em cada detalhe.",
    },
    {
      icon: Flame,
      title: "Feito na brasa",
      description: "O verdadeiro sabor do fogo.",
    },
  ];

  return (
    <section
      data-reveal="true"
      aria-label="Diferenciais"
      className="relative z-10 mx-auto -mt-8 grid max-w-7xl grid-cols-2 rounded-lg border border-border bg-card/95 md:grid-cols-4"
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className={`flex gap-4 p-5 md:p-7 ${
              index < 3 ? "md:border-r md:border-border" : ""
            }`}
          >
            <Icon className="h-8 w-8 shrink-0 text-primary md:h-10 md:w-10" />
            <div>
              <h3 className="text-[11px] font-extrabold uppercase text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-[9px] leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
