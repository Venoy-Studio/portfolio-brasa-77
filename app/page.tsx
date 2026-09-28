import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Differentials } from "@/components/Differentials";
import { MenuSection } from "@/components/MenuSection";
import { AboutSection } from "@/components/AboutSection";
import { HistoryCombosSection } from "@/components/HistoryCombosSection";
import { CallToActionBanner } from "@/components/CallToActionBanner";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";

export default function Home() {
  return (
    <main className="min-h-screen">
      <RevealObserver />
      <Header />
      <Hero />
      <Differentials />
      <MenuSection />
      <AboutSection />
      <HistoryCombosSection />
      <CallToActionBanner />
      <GallerySection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
