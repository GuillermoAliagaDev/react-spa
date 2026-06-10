import HeroBanner from "../components/HeroBanner";

export default function AboutPage() {
  const team = [
    { name: "Integrante 1", role: "Desarrollador Frontend" },
    { name: "Integrante 2", role: "Diseñador UI/UX" },
    { name: "Integrante 3", role: "Gestor de Estado y Contexto" },
    { name: "Integrante 4", role: "Documentación y Pruebas" },
  ];

  return (
    <>
      <HeroBanner
        title="Acerca del Portal"
        subtitle="Conoce más sobre el sistema de gestión de cursos e inscripciones."
      />

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2>¿Qué es el Portal del Estudiante?</h2>
              <p>
                Es una aplicación web de tipo SPA (Single Page Application)
                desarrollada en React que permite a los estudiantes explorar la
                oferta académica, visualizar detalles de los cursos y gestionar
                su preinscripción de manera sencilla y eficiente.
              </p>
            </div>

            <div className="about-section">
              <h2>Tecnologías utilizadas</h2>
              <ul className="tech-list">
                <li>
                  <strong>React</strong> &mdash; Librería para construir interfaces de usuario
                </li>
                <li>
                  <strong>React Router</strong> &mdash; Navegación SPA entre vistas
                </li>
                <li>
                  <strong>Context API</strong> &mdash; Manejo de estado global
                </li>
                <li>
                  <strong>Hooks</strong> &mdash; useState, useEffect para lógica de componentes
                </li>
                <li>
                  <strong>Vite</strong> &mdash; Herramienta de desarrollo y build
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
  hooks/        - Custom hooks
  routes/       - Configuración de rutas
  App.jsx       - Componente principal
  main.jsx      - Punto de entrada`}
              </pre>
            </div>

            <div className="about-section">
              <h2>Equipo de desarrollo</h2>
              <div className="team-grid">
                {team.map((member, index) => (
                  <div key={index} className="team-card">
                    <div className="team-avatar">
                      {member.name.charAt(0)}
                    </div>
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
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
