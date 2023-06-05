import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Suspense } from 'react';
import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <AppRouter />
      </Suspense>
    </div>
  );
};
