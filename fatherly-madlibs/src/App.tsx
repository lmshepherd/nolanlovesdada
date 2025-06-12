import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MadLibForm from './components/MadLibForm';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MadLibForm />} />
          {/* Reveal route will be added later */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
