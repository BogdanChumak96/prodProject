import { useState } from "react";
import styles from "./Sidebar.module.scss";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { ThemeSwitcher } from "../../../ThemeSwitcher";
import { LanguageSwitcher } from "../../../LanguageSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [toggled, setToggled] = useState<boolean>(false);
  const toggleHandler = () => {
    setToggled((prev) => !prev);
  };
  return (
    <div
      className={classNames(styles.Sidebar, { [styles.toggled]: toggled }, [
        className,
      ])}
    >
      <button onClick={toggleHandler}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.langSwitcher} />
      </div>
    </div>
  );
};
