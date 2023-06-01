import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <AppRouter />
    </div>
  );
};
