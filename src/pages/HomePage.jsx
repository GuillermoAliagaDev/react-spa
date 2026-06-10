import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { courses } from "../data/courses";
import HeroBanner from "../components/HeroBanner";
import CourseCard from "../components/CourseCard";

export default function HomePage() {
  const [featuredCourses, setFeaturedCourses] = useState([]);

  useEffect(() => {
    setFeaturedCourses(courses.filter((c) => c.enrolled < c.capacity).slice(0, 3));
  }, []);

  return (
    <>
      <HeroBanner
        title="Bienvenido al Portal del Estudiante"
        subtitle="Explora nuestra oferta académica, consulta los detalles de los cursos y gestiona tu preinscripción en unos pocos clics."
      >
        <Link to="/courses" className="btn btn-primary btn-lg">
          Ver Cursos Disponibles
        </Link>
        <Link to="/about" className="btn btn-outline btn-lg">
          Conoce más
        </Link>
      </HeroBanner>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Cursos con cupo disponible</h2>
          <div className="course-list">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-2">
            <Link to="/courses" className="btn btn-primary">
              Ver todos los cursos
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">¿Cómo funciona?</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Explora</h3>
              <p>Navega por el catálogo de cursos y filtra por categoría.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Selecciona</h3>
              <p>Revisa el detalle de cada curso y elige los que te interesen.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Preinscríbete</h3>
              <p>Agrega cursos a tu lista de preinscripción y gestiona tus selecciones.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
