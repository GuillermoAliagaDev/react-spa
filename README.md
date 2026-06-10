# Portal del Estudiante - Sistema de Gestión de Cursos e Inscripciones (PA3)

Este proyecto es una aplicación web del tipo SPA (Single Page Application) desarrollada en React.js utilizando Vite como empaquetador moderno. El sistema simula un entorno interactivo donde un estudiante puede explorar la oferta académica de la institución, revisar especificaciones al detalle y gestionar de manera global su preinscripción de asignaturas para el ciclo regular.

Evaluación Práctica Grupal desarrollada para el curso Programación Web II (Advanced Web Programming).

## Integrantes y Matriz de Participación

Debido a la naturaleza colaborativa de la evaluación, el equipo está conformado por dos integrantes con un nivel de participación equivalente y equitativo:

| Estudiante | Rol y Aportes Técnicos al Proyecto | Participación |
|---|---|---|
| Geraldine Khatrina Tudela Theo | Configuración de la SPA, enrutamiento dinámico con React Router, arquitectura del estado global con Context API y maquetación estructurada. | 100% |
| Guillermo Fabian Aliaga Matencio | Creación de componentes funcionales reutilizables, modelado del Mock Data de cursos, lógica interactiva de selección y documentación. | 100% |

## Características Técnicas Implementadas

- **Arquitectura de Componentes:** Uso estricto de componentes funcionales modulares y sintaxis JSX limpia.
- **Navegación Interactiva (SPA):** Integración de react-router-dom con rutas estáticas (/, /my-enrollments, /about) y rutas dinámicas por identificador único (/courses/:id) sin recargas de página.
- **Gestión de Estado Global (Context API):** Implementación de un proveedor centralizado (EnrollmentProvider) para compartir el estado de los cursos preinscritos y el cómputo total de créditos acumulados en tiempo real.
- **Hooks Nativos:** Uso de useState para el control interno de flujos, useEffect para efectos secundarios y useParams para la captura dinámica de parámetros en la URL.

## Tecnologías utilizadas

- **React 19** — Librería para construir interfaces de usuario
- **React Router 7** — Navegación SPA entre vistas
- **Context API** — Manejo de estado global
- **Vite** — Herramienta de desarrollo y build
- **CSS moderno** — Variables, flexbox, grid, diseño responsive

## Instalación y ejecución

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd react-spa

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview
```

## Capturas de pantalla

*(Agregar aquí las capturas de las vistas principales)*

## Link de exposición en YouTube

[EXPOCISION EN YOUTUBE CLICK AQUI](https://youtu.be/D0QtP5imleY)

## Estructura del proyecto

```
src/
  components/   - Componentes reutilizables (Navbar, CourseCard, CourseList, Footer, HeroBanner, CategoryFilter)
  pages/        - Vistas de la aplicación (Home, Courses, CourseDetail, MyEnrollments, About)
  context/      - Estado global con Context API (EnrollmentContext)
  data/         - Datos mock de cursos
  routes/       - Configuración de rutas (AppRoutes)
  hooks/        - Custom hooks
  App.jsx       - Componente principal con layout
  main.jsx      - Punto de entrada
```

## Flujo de navegación

1. **Inicio (/)** — Página principal con bienvenida, cursos destacados y pasos de uso.
2. **Cursos (/courses)** — Catálogo completo con búsqueda y filtro por categoría.
3. **Detalle de curso (/courses/:id)** — Información completa del curso seleccionado.
4. **Mis Inscripciones (/my-enrollments)** — Resumen de cursos preinscritos y créditos acumulados.
5. **Acerca de (/about)** — Información del proyecto y del equipo.

El estado de las preinscripciones se gestiona globalmente mediante Context API y se persiste en localStorage.
