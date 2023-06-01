import { classNames } from "../../../shared/lib/classNames/classNames";
import styles from "./ThemeSwitcher.module.scss";
import DarkIcon from "../../../shared/assets/icons/moon.svg";
import LightIcon from "../../../shared/assets/icons/sun.svg";
import { Theme, useTheme } from "../../../../src/app/providers/ThemeProvider";
import Button, { ThemeButton } from "../../../shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <DarkIcon width={32} />
      ) : (
        <LightIcon color="white" width={32} />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
