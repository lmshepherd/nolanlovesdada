import type { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { colors } from '../theme/colors';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => props.variant === 'secondary' ? colors.secondary : colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-family: 'Patrick Hand', cursive;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background-color: ${colors.gray.medium};
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:focus {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export const Button = ({ children, variant = 'primary', fullWidth = false, ...props }: ButtonProps) => {
  return (
    <StyledButton variant={variant} fullWidth={fullWidth} {...props}>
      {children}
    </StyledButton>
  );
}; 