import cs from "classnames";
import React, { ButtonHTMLAttributes } from "react";
import classes from "./styles.module.scss";

enum ButtonColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DEFAULT = "default",
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText?: string;
  size?: "small" | "medium" | "large";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  center?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const {
    buttonText,
    type = "button",
    onClick,
    className,
    iconLeft,
    iconRight,
    fullWidth,
    center,
    size = "medium",
    disabled,
    color = ButtonColor.DEFAULT,
  } = props;

  return (
    <button
      type={type}
      className={cs(
        classes.button,
        {
          [classes.fullWidth]: fullWidth,
          [classes.center]: center,
          [classes.primary]: color === ButtonColor.PRIMARY,
          [classes.default]: color === ButtonColor.DEFAULT,
          [classes.secondary]: color === ButtonColor.SECONDARY,
        },
        classes[size],
        className
      )}
      onClick={(e) => {
        if (onClick && !disabled) onClick(e);
      }}
      disabled={disabled}
    >
      {iconLeft}
      <div>
        <span>{buttonText}</span>
      </div>
      {iconRight}
    </button>
  );
};

export default Button;
