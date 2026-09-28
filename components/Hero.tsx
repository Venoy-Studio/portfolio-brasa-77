"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { BURGER_SLICES, getWhatsAppUrl } from "@/data/menu";

export function Hero() {
  const burgerStageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = burgerStageRef.current;
    if (!stage) return;

    let rafId = 0;
    let currentProgress = 0;
    let targetProgress = 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = window.matchMedia("(max-width: 767px)");

    const onScroll = () => {
      const scrollThreshold = isMobile.matches ? 390 : 620;
      targetProgress = Math.min(1, Math.max(0, window.scrollY / scrollThreshold));
      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      const speed = isMobile.matches ? 0.22 : 0.14;
      currentProgress += (targetProgress - currentProgress) * speed;

      if (Math.abs(targetProgress - currentProgress) < 0.001) {
        currentProgress = targetProgress;
      }

      stage.style.setProperty("--burger-progress", currentProgress.toFixed(4));

      if (Math.abs(targetProgress - currentProgress) > 0.001) {
        rafId = requestAnimationFrame(animate);
      } else {
        rafId = 0;
      }
    };

    if (prefersReducedMotion.matches) {
      stage.style.setProperty("--burger-progress", "0");
      return;
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative mx-auto grid min-h-[760px] max-w-7xl items-center overflow-hidden px-5 pb-16 pt-28 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:pt-24"
    >
      <div className="hero-copy-in relative z-10 pt-6 md:pt-0">
        <p className="mb-3 font-display text-lg font-bold italic uppercase text-primary">
          Hambúrgueres artesanais
        </p>
        <h1 className="display-type max-w-2xl text-[clamp(4.6rem,9vw,8.5rem)]">
          Brasa <span className="text-primary">77</span>
        </h1>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold uppercase leading-[0.9] md:text-5xl">
          O hambúrguer que merece sua fome.
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          Carne na brasa, ingredientes de verdade e sabor que fica na memória.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#cardapio"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-medium uppercase text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Ver cardápio <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-input bg-background px-8 text-sm font-medium uppercase transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Fazer pedido <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="hero-image-in relative -mx-5 mt-8 h-[390px] md:-mr-24 md:mt-0 md:h-[680px]">
        <div
          ref={burgerStageRef}
          className="burger-stage"
          aria-label="Hambúrguer Brasa 77 abrindo suas camadas conforme a rolagem"
        >
          <div className="burger-brand" aria-hidden="true">
            BRASA <span>77</span>
          </div>
          <div className="burger-glow" aria-hidden="true" />
          <img
            src="/assets/brasa-burger-closed-ByjJHXHQ.png"
            alt="Hambúrguer Brasa 77 completo"
            width={768}
            height={768}
            className="burger-closed"
          />
          <div className="burger-slices" aria-hidden="true">
            {BURGER_SLICES.map((slice, index) => (
              <div
                key={slice.top}
                className="burger-slice"
                style={
                  {
                    clipPath: `inset(${slice.top}% 0 ${100 - slice.bottom}% 0)`,
                    "--closed-y": `${slice.closedY}px`,
                    "--depth": `${slice.depth}px`,
                    "--slice-index": index,
                  } as React.CSSProperties
                }
              >
                <img src="/assets/brasa-burger-layers-Dphc3Tjh.png" alt="" />
              </div>
            ))}
          </div>
          <div className="hero-embers" aria-hidden="true">
            {Array.from({ length: 12 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
        </div>

        <div className="ember-float absolute right-6 top-8 rotate-6 font-display text-3xl font-black italic uppercase leading-none text-primary md:right-14 md:top-32 md:text-5xl">
          Sabor<br />
          em cada<br />
          camada!
        </div>
      </div>
    </section>
  );
}
