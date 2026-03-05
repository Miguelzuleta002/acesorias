# API REST: Sistema de Asesorías Académicas IUDigital

## 📖 Propósito del Proyecto
Este proyecto fue desarrollado como caso de estudio para la institución universitaria IUDigital. Su principal objetivo es gestionar y administrar de manera eficiente el proceso de asesorías académicas para estudiantes de pregrado y postgrado. Se estructuró el requerimiento como un sistema en el que cada asesoría representa un **Proyecto**, el cual está vinculado a información fundamental como los **Clientes** (estudiantes), las **Universidades**, los **Tipos de Proyecto** y las **Etapas** por las que atraviesa.

El proyecto se diseñó inicialmente bajo una arquitectura **Monolítica** y posteriormente evolucionó mediante el **Desacoplamiento** de su componente más crítico (Proyectos) en un **Microservicio** independiente, asegurando mayor escalabilidad y tolerancia a fallos.

---

## 🛠️ Tecnologías Utilizadas
A lo largo de todo el ciclo de desarrollo utilizamos el siguiente *stack Stack Tecnológico* (Stack MERN - Backend):

*   **Node.js**: Entorno de ejecución en el servidor.
*   **Express.js**: Framework minimalista de Node.js para la creación rápida y estructurada de la API (Rutas y Controladores).
*   **MongoDB Atlas**: Base de datos NoSQL desplegada completamente en la Nube, ideal para la flexibilidad de los documentos JSON.
*   **Mongoose**: Librería (ODM) que actúa como puente estricto entre Node.js y MongoDB, permitiéndonos crear "Esquemas" para validar la información.
*   **Docker & Docker Compose**: Herramientas de contenerización utilizadas para empaquetar ambas aplicaciones y ejecutarlas simultáneamente de manera aislada.
*   **Docker Hub**: Registro público en la nube donde reposan las imágenes finales del proyecto listas para producción.

---

## 📦 Arquitectura y Contenido del Proyecto

El código está dividido en dos proyectos principales y centralizado por un orquestador:

### 1. `asesorias-api` (Monolito Principal)
Corre en el puerto **4000**. Administra todos los catálogos del sistema relacional:
*   Módulo de **Clientes**
*   Módulo de **Universidades**
*   Módulo de **Tipos de Proyecto**
*   Módulo de **Etapas**

### 2. `proyecto-microservicio` (Módulo Desacoplado)
Corre en el puerto **4001**. Este sub-proyecto administra y opera exclusivamente todo el ciclo de vida del módulo **Proyecto**, que es el componente con mayor demanda y transaccionalidad del ecosistema.

### 3. Orquestación (`docker-compose.yml`)
Archivo raíz que coordina el encendido de ambas aplicaciones simultáneamente en contenedores aislados, inyectando las credenciales de la base de datos de manera segura mediante variables de entorno (`.env`).

---

## 🚀 Pasos de Desarrollo (Nuestra Evolución)

Para llegar hasta la versión final, el proyecto superó las siguientes fases cronológicas:

1.  **Levantamiento de Requisitos:** Análisis del caso de estudio de IUDigital y definición de los 5 módulos base.
2.  **Modelado de la Base de Datos:** Construcción de los esquemas (Schemas) utilizando Mongoose, aplicando reglas de validación (ej. emails únicos, enumeradores para las etapas y tipos) y relacionando el modelo `Proyecto` con los demás.
3.  **Desarrollo Monolítico:** Programación de todos los métodos CRUD (POST, GET, PUT) mediante controladores y enrutadores en un solo proyecto base.
4.  **Despliegue de DB en la Nube:** Migración de la base de datos de un entorno local a **MongoDB Atlas**, configurando redes, credenciales y URI de conexión.
5.  **Análisis de Desacoplamiento:** Identificación de `Proyecto` como el componente de mayor demanda debido a su constante cambio de etapas y su rol como orquestador de datos.
6.  **Extracción a Microservicio:** Creación del segundo proyecto en Node.js, migración de rutas e instalación de dependencias independientes.
7.  **Pruebas End-to-End:** Pruebas y validaciones de todos los endpoints utilizando `Postman`, garantizando la correcta inserción en MongoDB.
8.  **Contenerización Docker:** Creación de `Dockerfiles` para cada API e implementación de `Docker Compose`.
9.  **Lanzamiento a Producción:** Inicio de sesión y empuje (`push`) de las imágenes finales hacia el registro y repositorio público de **Docker Hub**.
