import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import Travel from './pages/Travel';
import FuturePlans from './pages/FuturePlans';

const App = () => (
  <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plans" element={<FuturePlans />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  </Router>
);

export default App;
