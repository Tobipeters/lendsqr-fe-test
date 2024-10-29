import React from "react";

interface LButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "primary_outline" | "secondary" | "danger";
  loading?: boolean;
  className?: string;
  size?: "md" | "lg";
  fullWidth?: boolean;
}

export const LButton: React.FC<LButtonProps> = ({
  type = "button",
  variant = "primary",
  loading = false,
  fullWidth = true,
  className = "",
  children,
  disabled,
  size = "lg",
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`${variant} ${size} ${className} ${fullWidth ? "w_full" : ""}`}
      {...rest}
    >
      {loading ? <span className="spinner"></span> : children}
    </button>
  );
};
