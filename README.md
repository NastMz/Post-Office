# Post Office - Frontend

Frontend del proyecto de Servidor de Correos Electrónicos desarrollado para la materia de Redes de Computadores.

## Descripción

Este es el frontend del sistema de correos electrónicos Post Office, una aplicación web que proporciona una interfaz de usuario para gestionar correos electrónicos a través de un servidor personalizado.

## Tecnologías Utilizadas

- **React**: Lógica principal de la aplicación
- **TypeScript**: Tipado estático y desarrollo escalable
- **CSS**: Estilos y diseño de la interfaz

## Características

- Interfaz web para cliente de correo electrónico
- Gestión de bandeja de entrada y envío de correos
- Integración con API backend personalizada
- Diseño responsive para diferentes dispositivos

## Requisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Conexión con la API backend (Post-Office-API)

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/NastMz/Post-Office.git
cd Post-Office

# Instalar dependencias
npm install

# Configurar variables de entorno (si es necesario)
cp .env.example .env
```

## Configuración

Configurar la URL de la API backend en el archivo de configuración correspondiente para conectar con el servidor de correos.

## Ejecución

```bash
# Modo desarrollo
npm start

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## API Integration

Este frontend se conecta con la API backend disponible en: [Post-Office-API](https://github.com/NastMz/Post-Office-API)

## Proyecto Académico

Este proyecto fue desarrollado como parte del curso de **Redes de Computadores**, implementando un sistema completo de servidor de correos electrónicos.
