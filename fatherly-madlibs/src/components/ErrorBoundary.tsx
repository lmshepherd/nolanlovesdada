import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import styled from '@emotion/styled';
import { colors } from '../theme/colors';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background-color: ${colors.background};
`;

const ErrorMessage = styled.h1`
  font-family: 'Patrick Hand', cursive;
  font-size: 2rem;
  color: ${colors.error};
  margin-bottom: 1rem;
`;

const ErrorDetails = styled.pre`
  font-family: monospace;
  font-size: 1rem;
  color: ${colors.text};
  margin: 1rem 0;
  padding: 1rem;
  background-color: ${colors.gray.light};
  border-radius: 8px;
  max-width: 100%;
  overflow-x: auto;
`;

const ReloadButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-family: 'Patrick Hand', cursive;
  font-size: 1.2rem;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorMessage>Oops! Something went wrong 😢</ErrorMessage>
          {this.state.error && (
            <ErrorDetails>
              {this.state.error.toString()}
            </ErrorDetails>
          )}
          <ReloadButton
            onClick={() => window.location.reload()}
            aria-label="Reload the page"
          >
            Try Again
          </ReloadButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
} 