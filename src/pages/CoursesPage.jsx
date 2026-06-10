import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { courses } from "../data/courses";
import CourseList from "../components/CourseList";
import CategoryFilter from "../components/CategoryFilter";
import HeroBanner from "../components/HeroBanner";

export default function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || null
  );

  useEffect(() => {
    let result = [...courses];

    if (selectedCategory) {
      result = result.filter((c) => c.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(term) ||
          c.code.toLowerCase().includes(term) ||
          c.instructor.toLowerCase().includes(term)
      );
    }

    setFilteredCourses(result);
  }, [selectedCategory, searchTerm]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    const params = {};
    if (cat) params.category = cat;
    if (searchTerm) params.q = searchTerm;
    setSearchParams(params);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const params = {};
    if (selectedCategory) params.category = selectedCategory;
    if (value) params.q = value;
    setSearchParams(params);
  };

  return (
    <>
      <HeroBanner
        title="Catálogo de Cursos"
        subtitle="Encuentra el curso que mejor se adapte a tus intereses y metas profesionales."
      />

      <section className="section">
        <div className="container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar por nombre, código o instructor..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>

          <CategoryFilter
            selected={selectedCategory}
            onSelect={handleCategoryChange}
          />

          <p className="results-count">
            {filteredCourses.length} curso{filteredCourses.length !== 1 ? "s" : ""} encontrado
            {filteredCourses.length !== 1 ? "s" : ""}
          </p>

          <CourseList courses={filteredCourses} />
        </div>
      </section>
    </>
  );
}
