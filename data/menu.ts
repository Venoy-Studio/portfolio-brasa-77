export interface Product {
  name: string;
  price: string;
  category: "Burgers" | "Acompanhamentos" | "Bebidas";
  description: string;
  image: string;
  tag?: string;
}

export interface Combo {
  name: string;
  price: string;
  description: string;
  image: string;
}

export const WHATSAPP_NUMBER = "5511987654321";

export function getWhatsAppUrl(productName?: string): string {
  const text = productName
    ? `Olá! Quero pedir ${productName}.`
    : `Olá! Quero fazer um pedido na Brasa 77.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const PRODUCTS: Product[] = [
  {
    name: "Brasa 77",
    price: "R$ 32,90",
    category: "Burgers",
    description: "Blend artesanal 160g, cheddar, bacon crocante, cebola roxa e molho especial da casa.",
    image: "/assets/brasa-hero-BdJUxe_6.jpg",
    tag: "Mais pedido",
  },
  {
    name: "Cheddar Bacon",
    price: "R$ 36,90",
    category: "Burgers",
    description: "Blend artesanal 160g, cheddar duplo, bacon crocante e maionese defumada.",
    image: "/assets/burger-bacon-D0JKPv-8.jpg",
  },
  {
    name: "BBQ Onion",
    price: "R$ 34,90",
    category: "Burgers",
    description: "Blend 160g, cheddar, bacon, cebola caramelizada e molho barbecue.",
    image: "/assets/burger-bbq-HDdp6kEW.jpg",
  },
  {
    name: "Mushroom Burger",
    price: "R$ 39,90",
    category: "Burgers",
    description: "Blend artesanal, queijo prato, cogumelos salteados e molho especial.",
    image: "/assets/burger-mushroom-D2FzZ6Ol.jpg",
  },
  {
    name: "Spicy Burger",
    price: "R$ 34,90",
    category: "Burgers",
    description: "Blend 160g, cheddar, pimenta, jalapeño e molho picante da casa.",
    image: "/assets/burger-spicy-Cdo2BJg2.jpg",
    tag: "Novo",
  },
  {
    name: "Batata da Casa",
    price: "R$ 19,90",
    category: "Acompanhamentos",
    description: "Batatas crocantes com tempero especial Brasa 77.",
    image: "/assets/brasa-fries-D1K8ofGw.jpg",
  },
  {
    name: "Milkshake de Chocolate",
    price: "R$ 18,90",
    category: "Bebidas",
    description: "Milkshake cremoso de chocolate com cobertura da casa.",
    image: "/assets/burger-bacon-D0JKPv-8.jpg",
  },
];

export const COMBOS: Combo[] = [
  {
    name: "Combo Clássico",
    price: "R$ 49,90",
    description: "1 hambúrguer + batata frita + refrigerante",
    image: "/assets/brasa-hero-BdJUxe_6.jpg",
  },
  {
    name: "Combo Duplo",
    price: "R$ 59,90",
    description: "2 hambúrgueres + batata frita + 2 refrigerantes",
    image: "/assets/burger-bacon-D0JKPv-8.jpg",
  },
  {
    name: "Combo Família",
    price: "R$ 129,90",
    description: "4 hambúrgueres + 4 batatas + 4 refrigerantes",
    image: "/assets/burger-bbq-HDdp6kEW.jpg",
  },
];

export const BURGER_SLICES = [
  { top: 0, bottom: 27, closedY: 172, depth: 24 },
  { top: 25, bottom: 42, closedY: 100, depth: 18 },
  { top: 39, bottom: 53, closedY: 55, depth: 12 },
  { top: 50, bottom: 63, closedY: 10, depth: 8 },
  { top: 60, bottom: 74, closedY: -34, depth: 12 },
  { top: 71, bottom: 88, closedY: -84, depth: 18 },
  { top: 85, bottom: 100, closedY: -150, depth: 24 },
];
