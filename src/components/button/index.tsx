import React from "react";

interface LButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  loading?: boolean;
  className?: string;
}

export const LButton: React.FC<LButtonProps> = ({
  type = "button",
  variant = "primary",
  loading = false,
  className = "",
  children,
  disabled,
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`${variant} ${className}`}
      {...rest}
    >
      {loading ? <span className="spinnner"></span> : children}
    </button>
  );
};
