import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";
import { classNames } from "../../lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={classNames(styles.Button, {}, [className, styles[theme]])}
    >
      {children}
    </button>
  );
};

export default Button;
