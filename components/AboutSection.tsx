import React from "react";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section data-reveal="true" id="sobre" className="overflow-hidden border-y border-border bg-card/50">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 md:grid-cols-2 md:px-8 md:py-16">
        <div className="relative h-[360px] md:h-[520px]">
          <img
            src="/assets/brasa-hero-BdJUxe_6.jpg"
            alt="Hambúrguer Brasa 77, imagem conceitual"
            width={1536}
            height={1280}
            loading="lazy"
            className="h-full w-full object-cover [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
          />
        </div>
        <div>
          <p className="font-display text-sm font-bold italic uppercase text-primary">
            Uma verdadeira
          </p>
          <h2 className="display-type mt-2 text-6xl md:text-8xl">Experiência</h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Aqui, cada ingrediente tem um propósito. Da seleção da carne ao toque final do molho, tudo é pensado para entregar o melhor sabor em cada mordida.
          </p>
          <a
            href="#historia"
            className="mt-7 inline-flex h-9 items-center justify-center gap-2 rounded-full border border-input bg-background px-4 py-2 text-sm font-medium uppercase shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Conheça nossa história <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
