import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import "./style.css"
import projects from "./projects.json"

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/portfolio/" element={<Hero />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/skills" element={<Skills />} />
          <Route path="/portfolio/projects" element={<Projects projects={projects} />} />
          <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
