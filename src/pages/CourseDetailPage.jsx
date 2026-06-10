import { useParams, Link, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import { useEnrollments } from "../context/EnrollmentContext";

export default function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === Number(id));
  const { isEnrolled, addEnrollment, removeEnrollment } = useEnrollments();

  if (!course) {
    return (
      <section className="section">
        <div className="container text-center">
          <h2>Curso no encontrado</h2>
          <p>El curso que buscas no existe o ha sido eliminado.</p>
          <Link to="/courses" className="btn btn-primary mt-1">
            Volver al catálogo
          </Link>
        </div>
      </section>
    );
  }

  const enrolled = isEnrolled(course.id);
  const available = course.capacity - course.enrolled;

  return (
    <section className="section">
      <div className="container">
        <button className="btn btn-outline mb-2" onClick={() => navigate(-1)}>
          &larr; Regresar
        </button>

        <div className="course-detail">
          <div className="course-detail-image">
            <img src={course.image} alt={course.name} />
            <span className="course-category">{course.category}</span>
            {course.enrolled >= course.capacity && (
              <span className="course-status-full">Curso completo</span>
            )}
          </div>

          <div className="course-detail-info">
            <span className="course-code">{course.code}</span>
            <h1>{course.name}</h1>
            <p className="course-instructor">
              <strong>Instructor:</strong> {course.instructor}
            </p>

            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Horario</span>
                <span>{course.schedule}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Créditos</span>
                <span>{course.credits}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Duración</span>
                <span>{course.duration}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Cupos</span>
                <span>
                  {available > 0
                    ? `${available} disponible${available !== 1 ? "s" : ""}`
                    : "No hay cupos"}
                </span>
              </div>
            </div>

            <h3>Descripción</h3>
            <p>{course.description}</p>

            {course.requirements.length > 0 && (
              <>
                <h3>Requisitos</h3>
                <ul>
                  {course.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="detail-actions">
              {enrolled ? (
                <button
                  className="btn btn-danger btn-lg"
                  onClick={() => {
                    removeEnrollment(course.id);
                  }}
                >
                  Quitar de mis inscripciones
                </button>
              ) : (
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    addEnrollment(course);
                  }}
                  disabled={course.enrolled >= course.capacity}
                >
                  {course.enrolled >= course.capacity
                    ? "Curso completo"
                    : "Inscribirme ahora"}
                </button>
              )}
              {enrolled && (
                <Link to="/my-enrollments" className="btn btn-outline btn-lg">
                  Ver mis inscripciones
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
