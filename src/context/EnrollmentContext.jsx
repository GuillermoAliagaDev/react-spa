import { createContext, useContext, useState, useEffect } from "react";

const EnrollmentContext = createContext();

export function EnrollmentProvider({ children }) {
  const [enrollments, setEnrollments] = useState(() => {
    const stored = localStorage.getItem("enrollments");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("enrollments", JSON.stringify(enrollments));
  }, [enrollments]);

  const addEnrollment = (course) => {
    setEnrollments((prev) => {
      if (prev.some((c) => c.id === course.id)) return prev;
      return [...prev, course];
    });
  };

  const removeEnrollment = (courseId) => {
    setEnrollments((prev) => prev.filter((c) => c.id !== courseId));
  };

  const isEnrolled = (courseId) => {
    return enrollments.some((c) => c.id === courseId);
  };

  const totalCredits = enrollments.reduce((sum, c) => sum + (c.credits || 0), 0);

  return (
    <EnrollmentContext.Provider
      value={{
        enrollments,
        addEnrollment,
        removeEnrollment,
        isEnrolled,
        totalCredits,
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
}

export function useEnrollments() {
  const ctx = useContext(EnrollmentContext);
  if (!ctx) throw new Error("useEnrollments must be used within EnrollmentProvider");
  return ctx;
}
