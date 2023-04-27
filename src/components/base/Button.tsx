import React from "react";
import classNames from "classnames";

type ButtonProps = {
  variant: "primary" | "secondary" | "danger" | "dark" | "light" | "link";
  outline?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

// button component with optional icon and size props
// tailwind classes are used for styling
// classNames is used to conditionally apply classes

const Button: React.FC<ButtonProps> = ({
  variant,
  outline = false,
  size = "medium",
  onClick,
  children,
  icon,
  className,
  disabled,
  type,
}) => {
  const classes = classNames(
    "border font-medium rounded-md",
    {
      "text-white": !outline && variant !== "link" && variant !== "light",
      "shadow-sm": variant !== "link" && variant !== "light",
      "bg-primary-500 hover:bg-primary-400 focus:bg-primary-400 border-primary-500 transition duration-200":
        variant === "primary" && !outline,
      "bg-secondary-500 hover:bg-secondary-400 focus:bg-secondary-400 border-secondary-500":
        variant === "secondary" && !outline,
      "bg-danger-500 hover:bg-danger-400 focus:bg-danger-400 border-danger-500":
        variant === "danger" && !outline,
      "bg-dark-500 hover:bg-dark-400 focus:bg-dark-400 border-dark-500":
        variant === "dark" && !outline,
      "bg-light-500 hover:bg-light-400 focus:bg-light-400 border-light-500":
        variant === "light" && !outline,
      "bg-white hover:bg-gray-100 focus:bg-gray-100 border-transparent":
        variant === "link" && !outline,
    },
    {
      "text-primary-600 hover:bg-primary-500 hover:text-white hover:bg-primary-400 focus:bg-primary-600 focus:text-white border-primary-600":
        variant === "primary" && outline,
      "text-secondary-600 hover:bg-secondary-500 hover:text-white hover:bg-secondary-400 focus:bg-secondary-600 focus:text-white border-secondary-600":
        variant === "secondary" && outline,
      "text-danger-600 hover:bg-danger-500 hover:text-white hover:bg-danger-400 focus:bg-danger-600 focus:text-white border-danger-600":
        variant === "danger" && outline,
      "text-dark-600 hover:bg-dark-500 hover:text-white hover:bg-dark-400 focus:bg-dark-600 focus:text-white border-dark-600":
        variant === "dark" && outline,
      "text-light-600 hover:bg-light-500 hover:text-white hover:bg-light-400 focus:bg-light-600 focus:text-white border-light-600":
        variant === "light" && outline,
    },
    {
      // if disabled, define bg-color based on variant
      "px-5 py-1 text-sm": size === "small",
      "px-6 py-2 text-base": size === "medium",
      "px-8 py-3 text-lg": size === "large",
    },
    className
  );

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
