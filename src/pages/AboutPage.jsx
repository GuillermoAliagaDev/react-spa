import HeroBanner from "../components/HeroBanner";

export default function AboutPage() {
  const team = [
    {
      name: "Geraldine Khatrina Tudela Theo",
      role: "Configuración de la SPA, enrutamiento dinámico con React Router, arquitectura del estado global con Context API y maquetación estructurada.",
    },
    {
      name: "Guillermo Fabian Aliaga Matencio",
      role: "Creación de componentes funcionales reutilizables, modelado del Mock Data de cursos, lógica interactiva de selección y documentación.",
    },
  ];

  return (
    <>
      <HeroBanner
        title="Acerca del Portal"
        subtitle="Sistema de Gestión de Cursos e Inscripciones — PA3"
      />

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2>¿Qué es el Portal del Estudiante?</h2>
              <p>
                Este proyecto es una aplicación web del tipo SPA (Single Page Application)
                desarrollada en React.js utilizando Vite como empaquetador moderno.
                El sistema simula un entorno interactivo donde un estudiante puede
                explorar la oferta académica de la institución, revisar especificaciones
                al detalle y gestionar de manera global su preinscripción de asignaturas
                para el ciclo regular.
              </p>
              <p>
                Evaluación Práctica Grupal desarrollada para el curso
                <strong> Programación Web II (Advanced Web Programming)</strong>.
              </p>
            </div>

            <div className="about-section">
              <h2>Características Técnicas Implementadas</h2>
              <ul className="tech-list">
                <li>
                  <strong>Arquitectura de Componentes:</strong> Uso estricto de componentes
                  funcionales modulares y sintaxis JSX limpia.
                </li>
                <li>
                  <strong>Navegación Interactiva (SPA):</strong> Integración de react-router-dom
                  con rutas estáticas (/, /my-enrollments, /about) y rutas dinámicas por
                  identificador único (/courses/:id) sin recargas de página.
                </li>
                <li>
                  <strong>Gestión de Estado Global (Context API):</strong> Implementación de un
                  proveedor centralizado (EnrollmentProvider) para compartir el estado de los
                  cursos preinscritos y el cómputo total de créditos acumulados en tiempo real.
                </li>
                <li>
                  <strong>Hooks Nativos:</strong> Uso de useState para el control interno de
                  flujos, useEffect para efectos secundarios y useParams para la captura
                  dinámica de parámetros en la URL.
                </li>
              </ul>
            </div>

            <div className="about-section">
              <h2>Tecnologías utilizadas</h2>
              <ul className="tech-list">
                <li>
                  <strong>React 19</strong> &mdash; Librería para construir interfaces de usuario
                </li>
                <li>
                  <strong>React Router 7</strong> &mdash; Navegación SPA entre vistas
                </li>
                <li>
                  <strong>Context API</strong> &mdash; Manejo de estado global
                </li>
                <li>
                  <strong>Hooks</strong> &mdash; useState, useEffect, useParams para lógica de componentes
                </li>
                <li>
                  <strong>Vite</strong> &mdash; Herramienta de desarrollo y build moderno
                </li>
              </ul>
            </div>

            <div className="about-section">
              <h2>Estructura del proyecto</h2>
              <pre className="code-block">
{`src/
  components/   - Componentes reutilizables
  pages/        - Vistas de la aplicación
  context/      - Estado global (Context API)
  data/         - Datos mock de cursos
  routes/       - Configuración de rutas
  App.jsx       - Componente principal
  main.jsx      - Punto de entrada`}
              </pre>
            </div>

            <div className="about-section">
              <h2>Integrantes y Matriz de Participación</h2>
              <p style={{ marginBottom: "1rem" }}>
                Debido a la naturaleza colaborativa de la evaluación, el equipo está
                conformado por dos integrantes con un nivel de participación equivalente
                y equitativo:
              </p>
              <div className="team-grid" style={{ gridTemplateColumns: "1fr" }}>
                {team.map((member, index) => (
                  <div key={index} className="team-card" style={{ textAlign: "left" }}>
                    <h4 style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>
                      {member.name}
                    </h4>
                    <p style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>{member.role}</p>
                    <p style={{ marginTop: "0.75rem", fontWeight: 700, color: "var(--primary)" }}>
                      Participación: 100%
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
