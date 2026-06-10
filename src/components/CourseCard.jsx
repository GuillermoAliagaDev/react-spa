import { Link } from "react-router-dom";
import { useEnrollments } from "../context/EnrollmentContext";

export default function CourseCard({ course }) {
  const { isEnrolled, addEnrollment, removeEnrollment } = useEnrollments();
  const enrolled = isEnrolled(course.id);

  return (
    <article className="course-card">
      <div className="course-card-image">
        <img src={course.image} alt={course.name} />
        <span className="course-category">{course.category}</span>
        {course.enrolled >= course.capacity && (
          <span className="course-status-full">Completo</span>
        )}
      </div>
      <div className="course-card-body">
        <span className="course-code">{course.code}</span>
        <h3>{course.name}</h3>
        <p className="course-instructor">{course.instructor}</p>
        <p className="course-schedule">{course.schedule}</p>
        <div className="course-meta">
          <span>{course.credits} créditos</span>
          <span>
            {course.enrolled}/{course.capacity} cupos
          </span>
        </div>
        <div className="course-card-actions">
          <Link to={`/courses/${course.id}`} className="btn btn-outline">
            Ver detalle
          </Link>
          {enrolled ? (
            <button
              className="btn btn-danger"
              onClick={() => removeEnrollment(course.id)}
            >
              Quitar
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => addEnrollment(course)}
              disabled={course.enrolled >= course.capacity}
            >
              {course.enrolled >= course.capacity ? "Sin cupo" : "Inscribirme"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
