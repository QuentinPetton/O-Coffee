# Étape 1 : Utiliser une image officielle Node.js
FROM node:18

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier les fichiers package.json et pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Étape 4 : Installer PNPM et les dépendances
RUN npm install -g pnpm && pnpm install

# Étape 5 : Copier tout le code source dans le conteneur
COPY . .

# Étape 6 : Exposer le port de l'application
EXPOSE 3000

# Étape 7 : Démarrer l'application
CMD ["pnpm", "dev"]
