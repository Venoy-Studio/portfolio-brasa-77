import React from "react";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/data/menu";

export function CallToActionBanner() {
  return (
    <section className="relative overflow-hidden border-y border-primary/40">
      <img
        src="/assets/brasa-fries-D1K8ofGw.jpg"
        alt="Batatas e brasas, imagem conceitual"
        width={1536}
        height={512}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover brightness-50"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-5 py-10 md:flex-row md:items-center md:px-8">
        <div>
          <h2 className="display-type text-5xl text-foreground">Bateu a fome?</h2>
          <p className="mt-1 text-sm text-foreground/90">
            Seu próximo burger está a poucos cliques.
          </p>
        </div>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-10 text-sm font-medium uppercase text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Pedir agora <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
