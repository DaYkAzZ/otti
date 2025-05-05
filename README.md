# Otti - Optimisation de Projets par IA

Otti est une plateforme SaaS innovante qui utilise l'intelligence artificielle pour optimiser la gestion de vos projets. Notre solution analyse automatiquement vos briefs et calcule instantanément les besoins en ressources, effectifs et budget pour une gestion de projet optimale.

## 🌟 Fonctionnalités Principales

- **Analyse IA Intelligente** : Notre agent IA analyse votre brief pour comprendre vos besoins et contraintes
- **Calcul d'Effectifs Précis** : Estimation précise du nombre de personnes nécessaires pour votre projet
- **Budget Intelligent** : Calcul automatique des coûts basé sur les meilleures pratiques du marché
- **Recommandations Personnalisées** : Suggestions adaptées pour optimiser votre projet
- **Authentification Sécurisée** : Connexion simple et sécurisée via Google OAuth2

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18.x ou supérieur
- npm ou yarn
- Un compte GitHub
- Un projet Google Cloud Platform (pour OAuth2)

### Installation

1. Clonez le repository :

```bash
git clone https://github.com/votre-username/otti.git
cd otti
```

2. Installez les dépendances :

```bash
npm install
# ou
yarn install
```

3. Configurez les variables d'environnement :

```bash
cp .env.example .env.local
```

4. Configurez l'authentification Google :

   - Créez un projet sur [Google Cloud Console](https://console.cloud.google.com)
   - Activez l'API Google+ API
   - Créez des identifiants OAuth2
   - Ajoutez les URLs de redirection autorisées
   - Copiez le Client ID et le Client Secret dans votre `.env.local`

5. Lancez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## 🛠️ Technologies Utilisées

- **Frontend** :

  - Next.js 14
  - React
  - Tailwind CSS
  - Framer Motion
  - TypeScript

- **Backend** :
  - Node.js
  - Prisma
  - PostgreSQL
  - OpenAI API
  - NextAuth.js (Auth.js)

## 📦 Structure du Projet

```
otti/
├── src/
│   ├── app/              # Routes et pages de l'application
│   │   ├── api/         # API routes
│   │   │   └── auth/    # Routes d'authentification
│   ├── components/       # Composants React réutilisables
│   ├── lib/             # Utilitaires et configurations
│   │   └── auth.ts      # Configuration NextAuth
│   └── styles/          # Styles globaux
├── public/              # Assets statiques
└── prisma/             # Schéma de base de données
```

## 🔧 Configuration

### Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
DATABASE_URL="postgresql://user:password@localhost:5432/otti"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
OPENAI_API_KEY="votre-clé-api"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="votre-secret-nextauth"
GOOGLE_CLIENT_ID="votre-client-id"
GOOGLE_CLIENT_SECRET="votre-client-secret"
```

## 🚀 Déploiement

1. Construisez l'application :

```bash
npm run build
# ou
yarn build
```

2. Démarrez le serveur de production :

```bash
npm start
# ou
yarn start
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou assistance :

- Email : support@otti.com
- Twitter : [@OttiApp](https://twitter.com/OttiApp)
- Documentation : [docs.otti.com](https://docs.otti.com)

## 🙏 Remerciements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [OpenAI](https://openai.com/)
