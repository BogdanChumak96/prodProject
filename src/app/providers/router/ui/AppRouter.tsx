import { FC, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../../../../pages/MainPage';
import { AboutPage } from '../../../../pages/AboutPage';
import { NoteFoundPage } from '../../../../pages/NotFoundPage';
import { PageLoader } from '../../../../widgets/PageLoader';

const createSuspenseWithFallback = (fallback: any) => (Component: FC) =>
  (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );

const router = createBrowserRouter([
  {
    path: '/',
    element: createSuspenseWithFallback(<PageLoader />)(MainPage),
  },
  {
    path: '/about',
    element: createSuspenseWithFallback(<PageLoader />)(AboutPage),
  },
  {
    path: '*',
    element: <NoteFoundPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
