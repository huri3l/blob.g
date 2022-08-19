import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';

export const MappedRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:slug" element={<Posts />} />
      </Routes>
    </Router>
  );
};
