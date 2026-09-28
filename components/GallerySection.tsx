import React from "react";
import { Instagram } from "lucide-react";

export function GallerySection() {
  const images = [
    { src: "/assets/brasa-hero-BdJUxe_6.jpg", alt: "Galeria Brasa 77 1, imagem conceitual" },
    { src: "/assets/burger-bacon-D0JKPv-8.jpg", alt: "Galeria Brasa 77 2, imagem conceitual" },
    { src: "/assets/brasa-grill-CdR6Vf7w.jpg", alt: "Galeria Brasa 77 3, imagem conceitual" },
    { src: "/assets/burger-spicy-Cdo2BJg2.jpg", alt: "Galeria Brasa 77 4, imagem conceitual" },
  ];

  return (
    <section
      data-reveal="true"
      id="galeria"
      className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[0.65fr_1.35fr] md:px-8"
    >
      <div>
        <p className="font-display text-sm font-bold italic uppercase text-primary">
          Galeria
        </p>
        <h2 className="font-display text-3xl font-bold leading-none">
          Momentos que valem a pena compartilhar.
        </h2>
        <a
          href="https://instagram.com/brasa77burger"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase text-primary transition-opacity hover:opacity-80"
        >
          Ver galeria <Instagram className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {images.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            width={400}
            height={500}
            loading="lazy"
            className="aspect-[3/4] w-full rounded object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        ))}
      </div>
    </section>
  );
}
