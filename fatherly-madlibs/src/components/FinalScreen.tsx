import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors } from '../theme/colors';
import { Button } from './Button';

const FinalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: ${colors.background};
  text-align: center;
`;

const Message = styled.h1`
  font-family: 'Patrick Hand', cursive;
  font-size: 2.5rem;
  color: ${colors.text};
  margin-bottom: 2rem;
`;

const SubMessage = styled.p`
  font-family: 'Patrick Hand', cursive;
  font-size: 1.5rem;
  color: ${colors.text};
  margin-bottom: 3rem;
`;

export const FinalScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <FinalContainer>
      <Message>Happy Father's Day! 🎉</Message>
      <SubMessage>
        Thank you for being the most amazing dad and creating these wonderful memories with me!
      </SubMessage>
      <Button onClick={() => navigate('/')} aria-label="Create another story">
        Create Another Story
      </Button>
    </FinalContainer>
  );
}; 