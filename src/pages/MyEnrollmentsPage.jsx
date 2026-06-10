import { Link } from "react-router-dom";
import { useEnrollments } from "../context/EnrollmentContext";
import HeroBanner from "../components/HeroBanner";

export default function MyEnrollmentsPage() {
  const { enrollments, removeEnrollment, totalCredits } = useEnrollments();

  return (
    <>
      <HeroBanner
        title="Mis Preinscripciones"
        subtitle="Revisa y gestiona los cursos que has seleccionado para tu matrícula."
      />

      <section className="section">
        <div className="container">
          {enrollments.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">&#x1F4DA;</div>
              <h3>No tienes cursos inscritos</h3>
              <p>
                Explora el catálogo y agrega cursos a tu lista de preinscripción.
              </p>
              <Link to="/courses" className="btn btn-primary btn-lg mt-1">
                Explorar cursos
              </Link>
            </div>
          ) : (
            <>
              <div className="enrollment-summary">
                <div className="summary-card">
                  <span className="summary-number">{enrollments.length}</span>
                  <span className="summary-label">Cursos seleccionados</span>
                </div>
                <div className="summary-card">
                  <span className="summary-number">{totalCredits}</span>
                  <span className="summary-label">Créditos totales</span>
                </div>
              </div>

              <div className="enrollment-list">
                {enrollments.map((course) => (
                  <div key={course.id} className="enrollment-item">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="enrollment-item-image"
                    />
                    <div className="enrollment-item-info">
                      <span className="course-code">{course.code}</span>
                      <h3>{course.name}</h3>
                      <p className="course-instructor">{course.instructor}</p>
                      <p className="course-schedule">{course.schedule}</p>
                      <span className="enrollment-credits">
                        {course.credits} créditos
                      </span>
                    </div>
                    <div className="enrollment-item-actions">
                      <Link
                        to={`/courses/${course.id}`}
                        className="btn btn-outline"
                      >
                        Ver detalle
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeEnrollment(course.id)}
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-2">
                <Link to="/courses" className="btn btn-primary btn-lg">
                  Seguir explorando cursos
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
