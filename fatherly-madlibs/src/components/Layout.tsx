import type { ReactNode } from 'react';
import styled from '@emotion/styled';
import { colors } from '../theme/colors';

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  background-color: ${colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Main = styled.main`
  background-color: ${colors.white};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 800px;
  width: 100%;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout; 