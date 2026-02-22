import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./pages/projects/Projects";
import Courses from "./pages/courses/Courses";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/formacao" element={<Courses />} />
        <Route path="/contatos" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
