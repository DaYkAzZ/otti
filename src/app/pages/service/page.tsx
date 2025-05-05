"use client";

import { useState } from "react";
import Header from "@/components/navigation/Header";

export default function Calculate() {
  const [result, setResult] = useState(false);
  return (
    <div className="min-h-screen pb-20">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Calcul de Budget et Ressources
        </h1>

        {result && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8 shadow-xl border border-white/20"></div>
            <div id="results-section" className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Résultats de l'Estimation
              </h2>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8 shadow-xl border border-white/20"></div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
