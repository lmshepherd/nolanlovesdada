import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import MadLibForm from './components/MadLibForm';
import { Reveal } from './components/Reveal';
import { FinalScreen } from './components/FinalScreen';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useAppState } from './context/AppStateContext';

const App = () => {
  const { inputs, slideIndex } = useAppState();
  const showFinal = inputs && slideIndex === 4; // Show final screen after last template

  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<MadLibForm />} />
            <Route 
              path="/reveal" 
              element={
                showFinal ? <FinalScreen /> : <Reveal />
              } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
