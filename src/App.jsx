import { BrowserRouter } from "react-router-dom";
import { EnrollmentProvider } from "./context/EnrollmentContext";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <EnrollmentProvider>
        <div className="app-layout">
          <Navbar />
          <main className="main-content">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </EnrollmentProvider>
    </BrowserRouter>
  );
}
