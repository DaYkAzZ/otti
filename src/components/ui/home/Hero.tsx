"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-48 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#176CD1] to-[#23D47A] bg-clip-text text-transparent">
              Optimisez vos projets avec l'IA
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Otti analyse votre brief et calcule instantanément vos besoins en
              ressources, effectifs et budget pour une gestion de projet
              optimale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/register"
                className="px-8 py-3 bg-[#176CD1] text-white rounded-lg font-semibold hover:bg-[#176CD1]/90 transition-colors"
              >
                Commencer gratuitement
              </Link>
              <Link
                href="/demo"
                className="px-8 py-3 bg-transparent border border-[#176CD1] text-[#176CD1] rounded-lg font-semibold hover:bg-[#176CD1]/10 transition-colors"
              >
                Voir la démo
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <motion.div
              className="relative w-full h-[500px] lg:h-[600px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#176CD1]/20 to-[#23D47A]/20 rounded-2xl backdrop-blur-sm border border-[#176CD1]/20 p-6">
                <div className="space-y-6">
                  {/* En-tête de la carte */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#23D47A]"></div>
                      <span className="text-gray-300 text-sm">
                        Analyse en temps réel
                      </span>
                    </div>
                    <div className="text-[#23D47A] text-sm">2min 15s</div>
                  </div>

                  {/* Contenu de l'analyse */}
                  <div className="space-y-4">
                    <div className="bg-[#00150b]/50 rounded-lg p-4 border border-[#176CD1]/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300">Effectifs estimés</span>
                        <span className="text-[#23D47A] font-bold">
                          12 personnes
                        </span>
                      </div>
                      <div className="h-2 bg-[#176CD1]/20 rounded-full">
                        <div className="h-full w-[85%] bg-gradient-to-r from-[#176CD1] to-[#23D47A] rounded-full"></div>
                      </div>
                    </div>

                    <div className="bg-[#00150b]/50 rounded-lg p-4 border border-[#176CD1]/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300">Budget estimé</span>
                        <span className="text-[#23D47A] font-bold">450K€</span>
                      </div>
                      <div className="h-2 bg-[#176CD1]/20 rounded-full">
                        <div className="h-full w-[92%] bg-gradient-to-r from-[#176CD1] to-[#23D47A] rounded-full"></div>
                      </div>
                    </div>

                    <div className="bg-[#00150b]/50 rounded-lg p-4 border border-[#176CD1]/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300">Durée estimée</span>
                        <span className="text-[#23D47A] font-bold">6 mois</span>
                      </div>
                      <div className="h-2 bg-[#176CD1]/20 rounded-full">
                        <div className="h-full w-[78%] bg-gradient-to-r from-[#176CD1] to-[#23D47A] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Statistiques */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#00150b] rounded-lg p-4 border border-[#176CD1]/20">
                      <div className="text-[#23D47A] text-2xl font-bold mb-1">
                        85%
                      </div>
                      <div className="text-gray-300 text-sm">
                        Précision des estimations
                      </div>
                      <div className="mt-2 text-xs text-gray-400">
                        Basé sur 1000+ projets
                      </div>
                    </div>
                    <div className="bg-[#00150b] rounded-lg p-4 border border-[#176CD1]/20">
                      <div className="text-[#23D47A] text-2xl font-bold mb-1">
                        2min
                      </div>
                      <div className="text-gray-300 text-sm">
                        Temps d'analyse
                      </div>
                      <div className="mt-2 text-xs text-gray-400">
                        vs 2h en moyenne
                      </div>
                    </div>
                  </div>

                  {/* Recommandations */}
                  <div className="bg-[#00150b]/50 rounded-lg p-4 border border-[#176CD1]/20">
                    <div className="text-gray-300 text-sm mb-2">
                      Recommandations IA
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#23D47A]"></div>
                        <span className="text-gray-400 text-sm">
                          Optimisation des ressources suggérée
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#23D47A]"></div>
                        <span className="text-gray-400 text-sm">
                          Points de vigilance identifiés
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
