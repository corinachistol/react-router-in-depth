import { BrowserRouter,Routes, Route, Link, NavLink } from 'react-router-dom';

//pages
import Home from './pages/Home.js';
import About from './pages/About.js';

export default  function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    
    </BrowserRouter>
  );
}

