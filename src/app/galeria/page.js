"use client";

import Gallery from "@/components/Gallery/Gallery";
import SpotyFloat from "@/components/SpotyFloat/SpotyFloat";

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Gallery />
      <SpotyFloat />
    </main>
  );
}
