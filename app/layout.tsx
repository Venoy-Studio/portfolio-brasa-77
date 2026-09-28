import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brasa77.com.br"),
  title: "Brasa 77 | Hambúrguer artesanal em São Paulo",
  description: "Hambúrguer artesanal na brasa, combos e delivery na Vila Madalena. Confira o cardápio e peça pelo WhatsApp.",
  authors: [{ name: "Brasa 77" }],
  openGraph: {
    title: "Brasa 77 | Sabor em cada camada",
    description: "Conheça nossos hambúrgueres artesanais e faça seu pedido.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/assets/brasa-hero-BdJUxe_6.jpg",
        width: 1200,
        height: 630,
        alt: "Brasa 77",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brasa 77 | Sabor em cada camada",
    description: "Conheça nossos hambúrgueres artesanais e faça seu pedido.",
    images: ["/assets/brasa-hero-BdJUxe_6.jpg"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,700;1,800;1,900&family=Manrope:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="ember-grid min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
