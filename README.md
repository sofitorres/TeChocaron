<<<<<<< HEAD
<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
=======
# 🚗 TeChocaron - PWA de Gestión de Siniestros
>>>>>>> 82dc1ea241a4d772d954fa9ca3b820eca6b8f156

![Version](https://img.shields.io/badge/version-1.0.0--MVP-blue.svg)
![Status](https://img.shields.io/badge/status-En%20Desarrollo-orange.svg)
![Stack](https://img.shields.io/badge/stack-Next.js%20%7C%20Supabase-lightgrey.svg)

Una Aplicación Web Progresiva (PWA) desarrollada para digitalizar, centralizar y agilizar el flujo de trabajo de siniestros automotores para **TeChocaron** y **Taller Aricar**. El sistema elimina la dependencia del papel, unificando la comunicación entre el cliente afectado, los operarios del taller y el panel administrativo.

## ✨ Características Principales (MVP)

*   **Arquitectura Multi-Rol:** 3 perfiles de acceso (Cliente/Productor, Empleado de Taller, Administrador) gestionados mediante Supabase Auth y perfiles extendidos.
*   **Filtro Inteligente de Aseguradoras:** Validación automática de compañías de seguros autorizadas.
*   **Reporte de Siniestros:** Subida de fotografías, denuncia administrativa y certificado de cobertura.
*   **Check-in Digital en Taller:** Registro de kilometraje, estado de llantas, pertenencias y firma digital de conformidad.
*   **Asistente Virtual (Chatbot):** Sistema estructurado por reglas para resolución de consultas frecuentes y derivación a asesores humanos.
*   **Tracking en Tiempo Real:** Línea de tiempo visual con el estado de reparación del vehículo.

## 🛠️ Stack Tecnológico (Serverless)

**Frontend & UI:**
*   Framework: [Next.js (App Router)](https://nextjs.org/)
*   Lenguaje: [TypeScript](https://www.typescriptlang.org/)
*   Estilos: [Tailwind CSS](https://tailwindcss.com/)
*   Componentes: [shadcn/ui](https://ui.shadcn.com/)

**Backend, Base de Datos & Storage:**
*   BaaS / Base de Datos: [Supabase (PostgreSQL)](https://supabase.com/)
*   Seguridad: Row Level Security (RLS) configurado en base de datos.
*   Almacenamiento: Supabase Storage (Buckets para fotos y firmas).

## 👥 Equipo de Desarrollo

*   **Sofía Torres** - *Data Architecture, Supabase & Server Actions* 
*   **Juan Ignacio Collazo** - *Frontend Development, PWA & UI/UX* 

## 🚀 Instalación y Entorno de Desarrollo Local

### Prerrequisitos
*   [Node.js](https://nodejs.org/) instalado en la máquina local.
*   Acceso al proyecto de Supabase (solicitar credenciales al equipo).

<<<<<<< HEAD
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# 🚗 TeChocaron - PWA de Gestión de Siniestros

![Version](https://img.shields.io/badge/version-1.0.0--MVP-blue.svg)
![Status](https://img.shields.io/badge/status-En%20Desarrollo-orange.svg)
![Stack](https://img.shields.io/badge/stack-Next.js%20%7C%20Supabase-lightgrey.svg)

Una Aplicación Web Progresiva (PWA) desarrollada para digitalizar, centralizar y agilizar el flujo de trabajo de siniestros automotores para **TeChocaron** y **Taller Aricar**. El sistema elimina la dependencia del papel, unificando la comunicación entre el cliente afectado, los operarios del taller y el panel administrativo.

## ✨ Características Principales (MVP)

*   **Arquitectura Multi-Rol:** 3 perfiles de acceso (Cliente/Productor, Empleado de Taller, Administrador) gestionados mediante Supabase Auth y perfiles extendidos.
*   **Filtro Inteligente de Aseguradoras:** Validación automática de compañías de seguros autorizadas.
*   **Reporte de Siniestros:** Subida de fotografías, denuncia administrativa y certificado de cobertura.
*   **Check-in Digital en Taller:** Registro de kilometraje, estado de llantas, pertenencias y firma digital de conformidad.
*   **Asistente Virtual (Chatbot):** Sistema estructurado por reglas para resolución de consultas frecuentes y derivación a asesores humanos.
*   **Tracking en Tiempo Real:** Línea de tiempo visual con el estado de reparación del vehículo.

## 🛠️ Stack Tecnológico (Serverless)

**Frontend & UI:**
*   Framework: [Next.js (App Router)](https://nextjs.org/)
*   Lenguaje: [TypeScript](https://www.typescriptlang.org/)
*   Estilos: [Tailwind CSS](https://tailwindcss.com/)
*   Componentes: [shadcn/ui](https://ui.shadcn.com/)

**Backend, Base de Datos & Storage:**
*   BaaS / Base de Datos: [Supabase (PostgreSQL)](https://supabase.com/)
*   Seguridad: Row Level Security (RLS) configurado en base de datos.
*   Almacenamiento: Supabase Storage (Buckets para fotos y firmas).

## 👥 Equipo de Desarrollo

*   **Sofía Torres** - *Data Architecture, Supabase & Server Actions* 
*   **Juan Ignacio Collazo** - *Frontend Development, PWA & UI/UX* 

## 🚀 Instalación y Entorno de Desarrollo Local

### Prerrequisitos
*   [Node.js](https://nodejs.org/) instalado en la máquina local.
*   Acceso al proyecto de Supabase (solicitar credenciales al equipo).

=======
>>>>>>> 82dc1ea241a4d772d954fa9ca3b820eca6b8f156
### Configuración de Variables de Entorno
1. Crear un archivo `.env.local` en la raíz del proyecto.
2. Añadir las credenciales de Supabase:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_de_supabase
<<<<<<< HEAD
>>>>>>> b47d9a15a3a75a81962da998389cbb193afab51f
=======
>>>>>>> 82dc1ea241a4d772d954fa9ca3b820eca6b8f156
