import { ErrorBoundary } from '../../app/providers/ErrorBoundary';
import { ThemeProvider } from '../../app/providers/ThemeProvider';
import { ReactNode } from 'react';

interface IProvider {
  children: ReactNode;
}

const Provider: React.FC<IProvider> = ({ children }) => {
  return (
    <ThemeProvider>
      <ErrorBoundary>{children}</ErrorBoundary>
    </ThemeProvider>
  );
};

export default Provider;
