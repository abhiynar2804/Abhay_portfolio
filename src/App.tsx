import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./app/layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

import ProjectDetail from './pages/ProjectDetail';
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
