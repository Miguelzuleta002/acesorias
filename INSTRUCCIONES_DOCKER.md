# Guía de Docker y Docker Compose

Este documento explica cómo construir las imágenes Docker de ambas aplicaciones (API Monolítica y Microservicio), ejecutarlas usando Docker Compose y finalmente subirlas a Docker Hub.

## Requisitos Previos

1.  Tener [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y en ejecución en tu computadora.
2.  Tener una cuenta gratuita en [Docker Hub](https://hub.docker.com/).

---

## Paso 1: Configurar las Variables de Entorno (.env)

En la raíz del proyecto (`c:\Users\migue\Downloads\acesorias`), crea un archivo llamado `.env` para que Docker Compose sepa qué URLs de MongoDB usar:

1. Crea un nuevo archivo llamado `.env` junto al archivo `docker-compose.yml`.
2. Pega el siguiente contenido (reemplaza con tus URLs y tu usuario de Docker):

\`\`\`env
# Reemplaza 'tu_usuario_docker' por tu nombre de usuario real en Docker Hub
DOCKER_USERNAME=tu_usuario_docker

# Rutas de conexión a MongoDB Atlas
MONGO_URI_API=mongodb+srv://Miguelz:1234z56@cluster0.vy20hc6.mongodb.net/asesorias-iudigital?retryWrites=true&w=majority&appName=Cluster0
MONGO_URI_MICROSERVICIO=mongodb+srv://Miguelz:1234z56@cluster0.vy20hc6.mongodb.net/asesorias-iudigital?retryWrites=true&w=majority&appName=Cluster0
\`\`\`

---

## Paso 2: Construir y Levantar las Imágenes Localmente

Abre una terminal en `c:\Users\migue\Downloads\acesorias` y ejecuta el siguiente comando. Esto leerá tu entorno, descargará Node.js, instalará las dependencias y arrancará ambas aplicaciones al mismo tiempo:

\`\`\`bash
docker-compose up --build -d
\`\`\`

*   El flag `--build` fuerza la creación de las imágenes desde cero.
*   El flag `-d` o "detached" permite que los contenedores corran en segundo plano.

Puedes comprobar que todo esté corriendo con:
\`\`\`bash
docker ps
\`\`\`

---

## Paso 3: Iniciar Sesión en Docker Hub

Para poder subir imágenes a internet, tu terminal debe estar autorizada. En la terminal escribe:

\`\`\`bash
docker login
\`\`\`
Te pedirá tu **Username** y **Password** de Docker Hub. (Al escribir la contraseña no se verá nada en pantalla, es normal, solo presiona Enter).

---

## Paso 4: Subir las Imágenes a Docker Hub

El comando `docker-compose up` del Paso 2 ya construyó las imágenes y las etiquetó automáticamente con tu número de usuario (gracias a la variable `DOCKER_USERNAME` que configuraste).

Ahora solo debes "empujarlas" (Push) hacia tu repositorio en la nube con este comando:

\`\`\`bash
docker-compose push
\`\`\`

¡Y listo! Al finalizar la carga, podrás entrar a tu cuenta de Docker Hub en el navegador y verás **2 nuevos repositorios** públicos listos para ser descargados y evaluados por tu profesor.
