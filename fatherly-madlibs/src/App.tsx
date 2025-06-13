import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import MadLibForm from './components/MadLibForm';
import Reveal from './components/Reveal';
import { FinalScreen } from './components/FinalScreen';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useAppState } from './context/AppStateContext';
import type { MadLibInputs } from './types/MadLibInputs';
import styled from '@emotion/styled';

const FinalMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
`;

const FinalImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 2rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FinalMessage = () => (
  <FinalMessageContainer>
    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Happy Father's Day 2025</h1>
    <FinalImage
      src="/images/final-message.png"
      alt="Father's Day illustration"
    />
    <p style={{ fontSize: '1.5rem' }}>Love, Nolan</p>
  </FinalMessageContainer>
);

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
            showFinal ? <FinalScreen /> : <Reveal inputs={inputs} />
          } 
        />
        <Route path="/final-message" element={<FinalMessage />} />
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
