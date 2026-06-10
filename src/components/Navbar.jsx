import { Link, NavLink } from "react-router-dom";
import { useEnrollments } from "../context/EnrollmentContext";

export default function Navbar() {
  const { enrollments } = useEnrollments();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">&#x1F393;</span>
          Portal del Estudiante
        </Link>
        <ul className="navbar-links">
          <li>
            <NavLink to="/" end>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses">Cursos</NavLink>
          </li>
          <li>
            <NavLink to="/about">Acerca de</NavLink>
          </li>
          <li>
            <NavLink to="/my-enrollments" className="enroll-link">
              Mis Inscripciones
              {enrollments.length > 0 && (
                <span className="badge">{enrollments.length}</span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
