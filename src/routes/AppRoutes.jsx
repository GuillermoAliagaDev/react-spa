import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import CourseDetailPage from "../pages/CourseDetailPage";
import MyEnrollmentsPage from "../pages/MyEnrollmentsPage";
import AboutPage from "../pages/AboutPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:id" element={<CourseDetailPage />} />
      <Route path="/my-enrollments" element={<MyEnrollmentsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="*"
        element={
          <section className="section">
            <div className="container text-center">
              <h2>404 - Página no encontrada</h2>
              <p>La página que buscas no existe.</p>
              <a href="/" className="btn btn-primary mt-1">
                Volver al inicio
              </a>
            </div>
          </section>
        }
      />
    </Routes>
  );
}
