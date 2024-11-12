import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieCatalog from './pages/MovieCatalog';
import PageNotFound from './pages/PageNotFound';
import MovieDetails from './pages/MovieDetails';
import MovieRegister from './pages/MovieRegister';

const App = () => (
  <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
    <Routes>
      <Route path="/" element={<MovieCatalog />} />
      <Route path="/register" element={<MovieRegister />} />
      <Route path="/detail/:id" element={<MovieDetails />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  </Router>
);

export default App;
