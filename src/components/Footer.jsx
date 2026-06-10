export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Portal del Estudiante</h4>
          <p>
            Sistema de Gestión de Cursos e Inscripciones.
            <br />
            Desarrollado como parte del curso de Advanced Web Programming.
          </p>
        </div>
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/courses">Cursos</a>
            </li>
            <li>
              <a href="/about">Acerca de</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>
            portal@instituto.edu.pe
            <br />
            +51 999 888 777
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Portal del Estudiante. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
