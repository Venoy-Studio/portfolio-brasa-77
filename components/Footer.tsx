import React from "react";
import { MessageCircle, MapPin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="mx-auto max-w-7xl px-5 py-14 md:px-8">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <a
            href="#inicio"
            aria-label="Brasa 77 - início"
            className="font-display text-2xl font-black italic uppercase text-foreground"
          >
            BRASA <span className="text-primary">77</span>
          </a>
          <p className="mt-3 max-w-52 text-xs leading-relaxed text-muted-foreground">
            Mais que hambúrgueres, criamos experiências.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-extrabold uppercase text-primary">Contato</h2>
          <a
            href="https://wa.me/5511987654321?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido%20na%20Brasa%2077."
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4 text-primary" /> (11) 98765-4321
          </a>
          <p className="mt-2 flex gap-2 text-xs text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            <span>
              Rua das Brasas, 77<br />
              Vila Madalena, São Paulo – SP
            </span>
          </p>
        </div>

        <div>
          <h2 className="text-xs font-extrabold uppercase text-primary">Horários</h2>
          <p className="mt-4 text-xs leading-6 text-muted-foreground">
            Segunda a quinta: 18h às 23h<br />
            Sexta e sábado: 18h às 00h<br />
            Domingo: 18h às 22h30
          </p>
        </div>

        <div>
          <h2 className="text-xs font-extrabold uppercase text-primary">Atendimento</h2>
          <p className="mt-4 text-xs leading-6 text-muted-foreground">
            Salão • retirada • delivery
          </p>
          <a
            href="https://instagram.com/brasa77burger"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-4 w-4 text-primary" /> @brasa77burger
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-[10px] text-muted-foreground">
        © 2026 Brasa 77. Imagens ilustrativas geradas para demonstração.
      </div>
    </footer>
  );
}
