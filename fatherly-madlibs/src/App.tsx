import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import MadLibForm from './components/MadLibForm';
import { Reveal } from './components/Reveal';
import { FinalScreen } from './components/FinalScreen';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useAppState } from './context/AppStateContext';
import type { MadLibInputs } from './types/MadLibInputs';

const AppRoutes = () => {
  const { inputs, slideIndex, setInputs } = useAppState();
  const navigate = useNavigate();
  const showFinal = inputs && slideIndex === 4; // Show final screen after last template

  const handleFormSubmit = (formInputs: MadLibInputs) => {
    setInputs(formInputs);
    navigate('/reveal');
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MadLibForm onSubmit={handleFormSubmit} />} />
        <Route 
          path="/reveal" 
          element={
            showFinal ? <FinalScreen /> : <Reveal />
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <AppRoutes />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
