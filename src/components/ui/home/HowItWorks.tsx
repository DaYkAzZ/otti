export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Décrivez votre projet",
      description:
        "Soumettez votre brief détaillé à notre agent IA. Plus votre description est précise, meilleures seront les estimations.",
      icon: "📝",
    },
    {
      number: "02",
      title: "Analyse intelligente",
      description:
        "Notre IA analyse votre projet en profondeur, en tenant compte de tous les paramètres et contraintes.",
      icon: "🔍",
    },
    {
      number: "03",
      title: "Résultats instantanés",
      description:
        "Recevez immédiatement vos estimations détaillées : effectifs, budget et recommandations.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-20" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#176CD1] to-[#23D47A] bg-clip-text text-transparent">
            Comment ça marche ?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            En trois étapes simples, obtenez une analyse complète de votre
            projet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="relative bg-gradient-to-br from-[#176CD1] to-[#23D47A] rounded-2xl p-8 transform group-hover:scale-105 transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#00150b] rounded-full flex items-center justify-center shadow-lg border border-[#176CD1]/20">
                  <span className="text-2xl font-bold text-[#176CD1]">
                    {step.number}
                  </span>
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-100">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
