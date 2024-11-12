import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieCatalog from './pages/MovieCatalog';
import PageNotFound from './pages/PageNotFound';
import MovieDetails from './pages/MovieDetails';
import MovieRegister from './pages/MovieRegister'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MovieCatalog />} />
      <Route path="/register" element={<MovieRegister />} />
      <Route path="/:id" element={<MovieDetails />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  </Router>
);

export default App;
