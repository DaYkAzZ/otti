import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Gratuit",
      description: "Parfait pour tester Otti",
      features: [
        "3 analyses de projet",
        "Calcul d'effectifs basique",
        "Estimation budgétaire simple",
        "Support par email",
      ],
      cta: "Commencer",
      popular: false,
    },
    {
      name: "Pro",
      price: "49€",
      period: "/mois",
      description: "Pour les professionnels",
      features: [
        "Analyses illimitées",
        "Calcul d'effectifs avancé",
        "Estimation budgétaire détaillée",
        "Recommandations personnalisées",
        "Support prioritaire",
        "Export des rapports",
      ],
      cta: "Essai gratuit 14 jours",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Sur mesure",
      description: "Pour les grandes équipes",
      features: [
        "Tout le plan Pro",
        "API personnalisée",
        "Formation dédiée",
        "Gestion multi-projets",
        "Support 24/7",
        "SLA garanti",
      ],
      cta: "Contactez-nous",
      popular: false,
    },
  ];

  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#176CD1] to-[#23D47A] bg-clip-text text-transparent">
            Tarifs simples et transparents
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#000d1c]/80 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular
                  ? "border-[#23D47A] shadow-[0_0_20px_rgba(35,212,122,0.2)]"
                  : "border-[#176CD1]/20 hover:border-[#176CD1]/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#23D47A] to-[#176CD1] text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-[#176CD1] to-[#23D47A] bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-400 text-lg">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-400 mt-2 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-300 group"
                  >
                    <svg
                      className="w-5 h-5 text-[#23D47A] mr-3 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.name === "Enterprise" ? "/contact" : "/register"}
                className={`block text-center py-3.5 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#23D47A] to-[#176CD1] text-white hover:shadow-[0_0_20px_rgba(35,212,122,0.4)]"
                    : "bg-[#176CD1] text-white hover:bg-[#176CD1]/90 hover:shadow-[0_0_20px_rgba(23,108,209,0.4)]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
