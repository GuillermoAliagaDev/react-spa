import CourseCard from "./CourseCard";

export default function CourseList({ courses, emptyMessage = "No se encontraron cursos." }) {
  if (!courses || courses.length === 0) {
    return <p className="empty-state">{emptyMessage}</p>;
  }

  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
