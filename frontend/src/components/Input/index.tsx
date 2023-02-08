import cs from "classnames";
import React, { InputHTMLAttributes } from "react";
import classes from "./styles.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({
  onChange,
  value,
  placeholder,
  className = "",
  onKeyDown,
  ...rest
}) => {
  return (
    <input
      className={cs(classes.inputBox, { [className]: className })}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      {...rest}
    />
  );
};

export default Input;
