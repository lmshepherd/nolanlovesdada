import type { ReactNode } from 'react';
import { colors } from '../theme/colors';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        backgroundColor: colors.background,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <main
        style={{
          backgroundColor: colors.white,
          borderRadius: '1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '2rem',
          maxWidth: '800px',
          width: '100%',
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout; 