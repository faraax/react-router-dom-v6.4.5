import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Pages
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App
