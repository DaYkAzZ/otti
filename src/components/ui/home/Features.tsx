export default function Features() {
  const features = [
    {
      title: "Analyse IA",
      description:
        "Notre agent IA analyse votre brief pour comprendre vos besoins et contraintes",
      icon: "🤖",
    },
    {
      title: "Calcul d'effectifs",
      description:
        "Estimation précise du nombre de personnes nécessaires pour votre projet",
      icon: "👥",
    },
    {
      title: "Budget intelligent",
      description:
        "Calcul automatique des coûts basé sur les meilleures pratiques du marché",
      icon: "💰",
    },
    {
      title: "Recommandations",
      description: "Suggestions personnalisées pour optimiser votre projet",
      icon: "💡",
    },
  ];

  return (
    <section className="py-20" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#176CD1] to-[#23D47A] bg-clip-text text-transparent">
            Fonctionnalités principales
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Otti vous accompagne à chaque étape de votre projet avec des outils
            intelligents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#000d1c]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#176CD1]/20 hover:border-[#176CD1]/40 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
