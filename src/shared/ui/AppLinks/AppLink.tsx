import { LinkProps, Link } from "react-router-dom";
import styles from "./AppLink.module.scss";
import { FC } from "react";
import { classNames } from "../../lib/classNames/classNames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinksProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
const AppLink: FC<AppLinksProps> = (props) => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
