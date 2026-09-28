import React from "react";

export function TestimonialsSection() {
  const testimonials = [
    {
      author: "Lucas M.",
      text: "O hambúrguer é absurdo de bom! A carne tem muito sabor e o bacon é crocante na medida.",
      badge: "exemplo",
    },
    {
      author: "Mariana S.",
      text: "Ambiente muito bonito, atendimento excelente e o lanche chegou perfeito.",
      badge: "exemplo",
    },
    {
      author: "Rafael C.",
      text: "O cheddar e o molho da casa fazem muita diferença em cada mordida.",
      badge: "exemplo",
    },
  ];

  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <p className="font-display text-sm font-bold italic uppercase text-primary">
          Depoimentos demonstrativos
        </p>
        <h2 className="font-display text-3xl font-bold">
          O que nossos clientes poderiam dizer
        </h2>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <blockquote
              key={index}
              className="rounded-md border border-border bg-background p-5 transition-colors hover:border-primary/50"
            >
              <div className="mb-3 text-accent tracking-widest">★★★★★</div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                “{item.text}”
              </p>
              <footer className="mt-4 text-xs font-bold text-foreground">
                {item.author}{" "}
                <span className="font-normal text-muted-foreground">
                  • {item.badge}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
