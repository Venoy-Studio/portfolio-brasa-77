import React from "react";
import { COMBOS, getWhatsAppUrl } from "@/data/menu";

export function HistoryCombosSection() {
  return (
    <section
      data-reveal="true"
      id="historia"
      className="mx-auto grid max-w-7xl gap-4 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8"
    >
      <article className="grid overflow-hidden rounded-md border border-border bg-card md:grid-cols-2">
        <div className="grill-reveal relative">
          <img
            src="/assets/brasa-grill-CdR6Vf7w.jpg"
            alt="Carne na brasa, imagem conceitual"
            width={1200}
            height={800}
            loading="lazy"
            className="h-full min-h-64 w-full object-cover"
          />
          <div className="grill-embers" aria-hidden="true">
            {Array.from({ length: 9 }, (_, t) => (
              <i key={t} />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center p-7">
          <p className="font-display text-sm font-bold italic uppercase text-primary">
            Nossa brasa
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold leading-none">
            Mais que uma hamburgueria, uma paixão.
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Na Brasa 77, o fogo encontra ingredientes selecionados para criar camadas de sabor. Uma experiência direta, intensa e preparada com cuidado.
          </p>
        </div>
      </article>

      <div className="rounded-md border border-border bg-card p-5">
        <p className="font-display text-sm font-bold italic uppercase text-primary">
          Combos especiais
        </p>
        <h2 className="font-display text-3xl font-bold">Escolha o seu favorito</h2>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {COMBOS.map((combo) => (
            <article
              key={combo.name}
              className="overflow-hidden rounded border border-border bg-background"
            >
              <img
                src={combo.image}
                alt={`${combo.name}, imagem conceitual`}
                width={912}
                height={912}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <div className="p-3">
                <h3 className="font-display text-base font-bold">{combo.name}</h3>
                <p className="mt-1 text-[8px] leading-relaxed text-muted-foreground">
                  {combo.description}
                </p>
                <strong className="mt-2 block text-[10px] text-primary font-bold">
                  {combo.price}
                </strong>
                <a
                  href={getWhatsAppUrl(combo.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex h-7 w-full items-center justify-center rounded-full bg-primary px-3 text-[8px] font-medium uppercase text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Adicionar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
