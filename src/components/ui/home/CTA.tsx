import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-[#176CD1] to-[#23D47A] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-[#00150b]/20 backdrop-blur-sm"></div>

          <div className="relative px-8 py-16 md:px-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt à optimiser vos projets ?
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                Rejoignez des centaines de chefs de projet qui font confiance à
                Otti pour leurs estimations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="px-8 py-3 bg-white text-[#176CD1] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Commencer gratuitement
                </Link>
                <Link
                  href="/demo"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Voir la démo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
