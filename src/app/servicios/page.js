"use client";

import Services from "@/components/Services/Services";
import Prices from "@/components/Prices/Prices";
import Reviews from "@/components/Reviews/Reviews";
import SpotyFloat from "@/components/SpotyFloat/SpotyFloat";

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Services />
      <Prices />
      <Reviews />
      <SpotyFloat />
    </main>
  );
}
