import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

// Pages
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to={'/'}>
            Home
          </NavLink>
          <NavLink to={'about'}>
            About
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App
