# 🚀 Retos Frontend - Portafolio Profesional

Bienvenido a **Retos Frontend**, un portafolio interactivo y moderno diseñado para mostrar proyectos y desafíos de desarrollo web con un enfoque profesional y amigable. Este proyecto está construido con **Astro** y **TailwindCSS**, combinando rendimiento, escalabilidad y diseño responsivo.

## 📋 Descripción General

**Retos Frontend** es una plataforma completa que integra:
- 🎨 **Portafolio Personal**: Presenta tu perfil, proyectos destacados y enlaces a tus redes sociales
- 🏆 **Galería de Retos**: Muestra una colección de desafíos frontend completados, con clasificación por dificultad
- 📱 **Diseño Responsivo**: Optimizado para todos los dispositivos (mobile, tablet, desktop)
- ⚡ **Alto Rendimiento**: Sitio estático generado con Astro para velocidad máxima
- 🎯 **Componentes Reutilizables**: Arquitectura modular y fácil de mantener

---

## 🏗️ Estructura del Proyecto

```
retos-frontend/
├── public/                          # Archivos estáticos públicos
│   └── (imágenes y recursos estáticos)
│
├── src/
│   ├── assets/                      # Recursos de imagen y multimedia
│   │   └── images/
│   │       ├── perfil-enlaces-redes-sociales/
│   │       ├── portafolio/
│   │       └── resumen-pedido/
│   │
│   ├── components/                  # Componentes Astro reutilizables
│   │   ├── Welcome.astro            # Componente de bienvenida
│   │   └── retos/
│   │       ├── PerfilEnlacesRedesSociales.astro    # Perfil con enlaces sociales
│   │       ├── Portafolio.astro                    # Card de portafolio
│   │       └── ResumenPedido.astro                 # Resumen de pedidos
│   │
│   ├── content/                     # Colecciones de contenido markdown
│   │   └── retos/
│   │       ├── perfil-enlaces-redes-sociales.md   # Metadatos reto 1
│   │       ├── portafolio.md                       # Metadatos reto 2
│   │       └── resumen-pedido.md                   # Metadatos reto 3
│   │
│   ├── layouts/                     # Layouts base para páginas
│   │   └── Layout.astro             # Layout principal
│   │
│   ├── pages/                       # Rutas y páginas del sitio
│   │   ├── index.astro              # Página principal (retos)
│   │   ├── portafolio/
│   │   │   └── index.astro          # Página del portafolio personal
│   │   └── retos/
│   │       └── [slug].astro         # Página dinámica de detalle del reto
│   │
│   ├── styles/                      # Estilos CSS
│   │   ├── global.css               # Estilos globales
│   │   └── retos/
│   │       ├── portafolio.css
│   │       ├── styles-perfil-enlaces-redes-sociales.css
│   │       └── styles-resumen-pedido.css
│   │
│   └── content.config.ts            # Configuración de colecciones de contenido
│
├── astro.config.mjs                 # Configuración de Astro
├── tsconfig.json                    # Configuración de TypeScript
├── package.json                     # Dependencias e información del proyecto
├── pnpm-lock.yaml                   # Lock file de pnpm
├── pnpm-workspace.yaml              # Configuración de workspace
└── README.md                        # Este archivo
```

---

## 🔧 Requisitos Previos

Antes de comenzar, asegúrate de tener instalados:
- **Node.js**: v22.12.0 o superior
- **pnpm**: v10.30.1 o superior (gestor de paquetes utilizado en este proyecto)

> **Nota**: Si no tienes pnpm instalado, puedes instalarlo con: `npm install -g pnpm`

---

## 📦 Instalación y Configuración

### 1. Clonar o descargar el proyecto
```bash
# Si usas git
git clone <tu-repositorio>
cd retos-frontend

# O simplemente navega a la carpeta del proyecto
cd retos-frontend
```

### 2. Instalar dependencias
```bash
pnpm install
```

---

## 🚀 Comandos Principales

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Descripción | Uso |
|---------|-------------|-----|
| `pnpm dev` | Inicia el servidor de desarrollo con hot reload | Desarrollo local |
| `pnpm build` | Compila el proyecto a producción | Antes de desplegar |
| `pnpm preview` | Previsualiza la compilación localmente | Validar producción |
| `pnpm astro` | Acceso a CLI de Astro | Comandos avanzados |

### Ejemplos de uso:

```bash
# Iniciar el servidor de desarrollo
pnpm dev
# El sitio estará disponible en: http://localhost:4321

# Compilar para producción
pnpm build
# Genera los archivos finales en la carpeta: ./dist/

# Previsualizar la build de producción
pnpm preview
```

---

## 📄 Especificación Técnica

### Dependencias Principales

| Paquete | Versión | Propósito |
|---------|---------|----------|
| Astro | ^6.0.6 | Framework de generación de sitios estáticos |
| TailwindCSS | ^4.2.2 | Framework de CSS para utilidades |
| @tailwindcss/vite | ^4.2.2 | Plugin de Tailwind para Vite |

### Configuración

#### **astro.config.mjs**
- Configura la integración de TailwindCSS a través de Vite
- Define opciones de construcción y desarrollo

#### **content.config.ts**
Define esquemas para colecciones de contenido:
```typescript
// Colección: retos
- title: Título del reto (string requerido)
- description: Descripción breve (string requerido)
- difficulty: Nivel de dificultad (facil | medio | dificil)
- tags: Etiquetas del reto (array de strings)
- image: Imagen representativa (URL opcional)
- demo: Enlace a demo en vivo (URL opcional)
- completedDate: Fecha de completación (date requerida)
- customStyles: Ruta a estilos personalizados (string opcional)
```

---

## 📖 Rutas del Sitio

### Navegación Principal

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Índice de Retos | Lista principal de todos los desafíos completados |
| `/portafolio/` | Portafolio Personal | Página de presentación profesional |
| `/retos/[slug]` | Detalle del Reto | Página individual de cada desafío |

### Ejemplos de URLs dinámicas:
- `/retos/perfil-enlaces-redes-sociales` - Detalle del reto 1
- `/retos/portafolio` - Detalle del reto 2
- `/retos/resumen-pedido` - Detalle del reto 3

---

## 🎨 Componentes

### Layout Principal (`Layout.astro`)
- Estructura HTML base
- Metadatos del sitio
- Estilos globales

### Componentes de Retos

#### **Portafolio.astro**
- Tarjeta de enlace al portafolio personal
- Enlaza a `/portafolio/`

#### **PerfilEnlacesRedesSociales.astro**
- Muestra perfil con enlaces a redes sociales
- Estilos customizados

#### **ResumenPedido.astro**
- Componente para mostrar un resumen de pedido ejemplo
- Demostración de funcionalidad

---

## 📝 Cómo Agregar Nuevos Retos

### Paso 1: Crear archivo de contenido
Crea un archivo markdown en `src/content/retos/mi-nuevo-reto.md`:

```markdown
---
title: "Nombre del Reto"
description: "Descripción breve del desafío"
difficulty: "medio"
tags: ["html", "css", "javascript"]
image: "/images/mi-reto.png"
demo: "https://demo.ejemplo.com"
completedDate: 2026-03-25
customStyles: "/styles/retos/mi-reto.css"
---

## Descripción Detallada

Contenido del reto en Markdown...

### Características
- Característica 1
- Característica 2
```

### Paso 2: Crear componente del reto (opcional)
Crea `src/components/retos/MiNuevoReto.astro`:

```astro
---
// Estilos e imports
---

<section>
  {/* Tu componente aquí */}
</section>
```

### Paso 3: Crear estilos (opcional)
Crea `src/styles/retos/mi-nuevo-reto.css` si necesitas estilos personalizados.

---

## 🎯 Niveles de Dificultad

Los retos se clasifican en tres niveles para facilitar su navegación:

| Nivel | Color | Descripción |
|-------|-------|-------------|
| **facil** | 🟢 Verde | Proyectos introductorios, conceptos básicos |
| **medio** | 🟡 Amarillo | Proyectos intermedios, conceptos avanzados |
| **dificil** | 🔴 Rojo | Proyectos complejos, múltiples tecnologías |

---

## 🎨 Diseño y Estilos

### Utilidades de TailwindCSS
El proyecto utiliza clases de Tailwind para estilos responsive:

```html
<!-- Grid responsivo: 1 columna móvil, 2 tablet, 3 desktop -->
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Colores y Esquema
- Primario: Azul (componentes interactivos)
- Secundario: Gris (textos y fondos)
- Dificultad fácil: Verde
- Dificultad media: Amarillo
- Dificultad difícil: Rojo

---

## 📱 Compatibilidad y Rendimiento

✅ **Navegadores Soportados**:
- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Mobile browsers (iOS Safari, Chrome Android)

⚡ **Optimizaciones**:
- Sitio estático (HTML pre-generado)
- Imágenes optimizadas con `astro:assets`
- CSS incluido en línea
- Sin JavaScript innecesario

---

## 🐛 Solución de Problemas

### El servidor no inicia
```bash
# Limpia cache y reinstala dependencias
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Las imágenes no se cargan
Verifica que la ruta de las imágenes en `Assets` sea correcta y que existan en `src/assets/images/`

### Los estilos no se aplican
Asegúrate de que los archivos CSS estén importados correctamente en los componentes Astro

---

## 📚 Recursos Útiles

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de TailwindCSS](https://tailwindcss.com/docs)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Variables y Composiciones en Astro](https://docs.astro.build/en/basics/astro-components/)

---

## 📞 Contacto y Soporte

Si tienes preguntas o sugerencias sobre el proyecto:
- Revisa la sección `/portafolio/` para encontrar información de contacto
- Consulta los enlaces en la página principal

---

## 📄 Licencia

Este proyecto está disponible bajo licencia MIT. Siéntete libre de utilizarlo, modificarlo y distribuirlo.

---

## 🙌 Agradecimientos

Gracias por utilizar Retos Frontend. Esperamos que este portafolio sea una excelente forma de mostrar tus habilidades y proyectos al mundo.

**Versión**: 0.0.1  
**Última actualización**: Marzo 2026
