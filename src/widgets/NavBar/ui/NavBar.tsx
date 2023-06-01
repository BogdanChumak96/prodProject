import { classNames } from "../../../shared/lib/classNames/classNames";
import styles from "./NavBar.module.scss";
import AppLink, { AppLinkTheme } from "../../../shared/ui/AppLinks/AppLink";
import { ThemeSwitcher } from "../../ThemeSwitcher";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(styles.nav, {}, [className])}>
      <ThemeSwitcher />

      <div className={styles.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={styles.mainLink}
          to={"/"}
        >
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          About
        </AppLink>
      </div>
    </div>
  );
};
