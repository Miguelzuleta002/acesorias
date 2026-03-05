FROM node:18-alpine

# Directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto
EXPOSE 4000

# Comando para iniciar la aplicación principal
CMD ["node", "index.js"]
