import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Create from './page/Create';
import Update from './page/Update';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Supa Smmothies</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Smoothies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
