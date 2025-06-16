# Utilise une image officielle Node.js comme image de base
FROM node:14

# Définit le répertoire de travail dans le conteneur
WORKDIR /app/portfolio

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le reste de l'application
COPY . .

# Expose le port sur lequel l'application React sera exécutée
EXPOSE 3000

# Commande pour démarrer l'application React
CMD ["npm", "start"]
