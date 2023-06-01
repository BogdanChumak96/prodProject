import { FC, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "../../../../pages/MainPage";
import { AboutPage } from "../../../../pages/AboutPage";

const createSuspenseWithFallback = (fallback: any) => (Component: FC) =>
  (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );

const router = createBrowserRouter([
  {
    path: "/",
    element: createSuspenseWithFallback(<div>Loading...</div>)(MainPage),
  },
  {
    path: "/about",
    element: createSuspenseWithFallback(<div>Loading...</div>)(AboutPage),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
