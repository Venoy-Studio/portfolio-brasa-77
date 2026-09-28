"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, ArrowRight, Menu, X } from "lucide-react";
import { getWhatsAppUrl } from "@/data/menu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "cardapio", "sobre", "galeria", "contato"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: [string, string][] = [
    ["Início", "inicio"],
    ["Cardápio", "cardapio"],
    ["Sobre", "sobre"],
    ["Galeria", "galeria"],
    ["Contato", "contato"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-border bg-background/90 px-5 shadow-2xl backdrop-blur-md md:px-7">
        <a
          href="#inicio"
          aria-label="Brasa 77 - início"
          className="font-display text-2xl font-black italic uppercase text-foreground transition-opacity hover:opacity-90"
        >
          BRASA <span className="text-primary">77</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-[11px] font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                activeSection === id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#cardapio"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-white/10"
            aria-label="Sacola"
          >
            <ShoppingBag className="h-4 w-4" />
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-2 text-sm font-medium uppercase text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Fazer pedido <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-white/10 md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav className="mx-auto mt-2 flex max-w-7xl flex-col rounded-lg border border-border bg-card p-4 shadow-2xl md:hidden">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setIsOpen(false)}
              className="border-b border-border px-3 py-4 font-display text-xl font-bold uppercase transition-colors last:border-0 hover:text-primary"
            >
              {label}
            </a>
          ))}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-3 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-medium uppercase text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Fazer pedido <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      )}
    </header>
  );
}
