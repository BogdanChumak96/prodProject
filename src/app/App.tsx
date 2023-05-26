import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPageLazy } from "../pages/AboutPage/AboutPageLazy";
import { MainPageLazy } from "../pages/MainPage/MainPageAsync";
import { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../helpers/classNames/classNames";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MainPageLazy />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AboutPageLazy />
      </Suspense>
    ),
  },
]);

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>{theme}</button>
      <RouterProvider router={router} />
    </div>
  );
};
