# Charlitron Digital ⚡

> **Soluciones digitales para negocios.**  
> Webs, apps, automatizaciones e inteligencia artificial para simplificar procesos, vender mejor y ahorrar tiempo.

Sitio web oficial de **Charlitron Digital**, desarrollado con React 19, TypeScript, Tailwind CSS y Vite.

---

## 🚀 Características del Proyecto

- **Arquitectura Moderna y Ultrarrápida**: Desarrollado sobre React 19 + TypeScript + Vite.
- **Estilo y Diseño Responsive**: Optimizado para cualquier dispositivo (móviles, tablets y pantallas de escritorio) usando Tailwind CSS v4.
- **Menú Móvil Modal (Hamburguesa)**: Navegación cómoda para pantallas táctiles con accesos directos a WhatsApp, llamada y correo.
- **Catálogo de Soluciones & Casos de Éxito**: Modales interactivos para explorar proyectos reales con enlaces a sitios en vivo.
- **Conversión Directa a WhatsApp**: Enlaces dinámicos preconfigurados según la necesidad o proyecto consultado.
- **Marco Legal Completo**:
  - Aviso de Privacidad Integral (conforme a la LFPDPPP en México).
  - Términos y Condiciones de Uso.
  - Política de Cookies y guía de configuración.
- **Control de Privacidad / Cookies**: Banner emergente con opciones de *Aceptar* / *No estoy de acuerdo* y persistencia local (`localStorage`).

---

## 🛠️ Tecnologías Utilizadas

- **Frontend**: [React 19](https://react.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Empaquetador y Dev Server**: [Vite](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Animaciones**: [Motion](https://motion.dev/)

---

## 📦 Instalación y Uso Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

### 4. Compilar para producción
```bash
npm run build
```
Los archivos optimizados y listos para despliegue se generarán en la carpeta `dist/`.

### 5. Previsualizar la versión de producción
```bash
npm run preview
```

---

## 📁 Estructura del Proyecto

```text
├── public/                 # Recursos públicos e imágenes estáticas
│   ├── charlitron-logo.png # Logotipo oficial de Charlitron Digital
│   ├── favicon.png         # Ícono del sitio
│   └── services-bg.jpg     # Fondo de la sección de soluciones
├── src/
│   ├── components/         # Componentes modulares de la interfaz
│   │   ├── Header.tsx      # Barra de navegación y modal móvil hamburguesa
│   │   ├── Hero.tsx        # Portada principal con propuesta de valor
│   │   ├── WhatWeDo.tsx    # Tarjetas de servicios y soluciones
│   │   ├── NeedsSelector.tsx # Botones de intención hacia WhatsApp
│   │   ├── EvidenceSection.tsx # Casos reales de clientes
│   │   ├── ProjectModal.tsx # Modal de detalle de cada proyecto
│   │   ├── HowWeWork.tsx   # Pasos de trabajo
│   │   ├── LegalPage.tsx   # Vista de Aviso de Privacidad, Términos y Cookies
│   │   ├── CookieConsent.tsx # Banner de consentimiento de cookies
│   │   └── Footer.tsx      # Pie de página con enlaces legales y contacto
│   ├── data/
│   │   └── content.ts      # Textos, servicios, proyectos y números de contacto
│   ├── App.tsx             # Componente raíz y enrutamiento con hash
│   ├── main.tsx            # Punto de entrada de React
│   └── index.css           # Configuración de estilos globales con Tailwind CSS
├── index.html              # Plantilla HTML principal con etiquetas SEO y OpenGraph
├── package.json            # Scripts y dependencias
├── tsconfig.json           # Configuración de TypeScript
└── vite.config.ts          # Configuración de Vite
```

---

## 🌐 Despliegue en Producción

El proyecto produce un bundle estático listo para ser desplegado en cualquier plataforma:

- **Vercel**: Conectar el repositorio de GitHub; detecta Vite automáticamente.
- **Netlify**: Configurar `npm run build` como comando de compilación y `dist` como Publish directory.
- **Cloudflare Pages / GitHub Pages**: Compatible con sitios estáticos de Vite.

---

## 📬 Contacto y Soporte

- **WhatsApp**: [444 423 7092](https://wa.me/5214444237092)
- **Correo**: [nadrian18@gmail.com](mailto:nadrian18@gmail.com)
- **Ubicación**: San Luis Potosí, S.L.P., México

---

© 2026 **Charlitron Digital**. Todos los derechos reservados.
