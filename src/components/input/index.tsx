import React from "react";

interface LInputProps extends React.InputHTMLAttributes<HTMLElement> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  label?: string;
  _size?: "md" | "lg";
  fullWidth?: boolean;
  width?: string;
  icon?: React.JSX.Element | string;
}

export const LInput: React.FC<LInputProps> = ({
  type = "text",
  fullWidth = false,
  label,
  placeholder,
  value,
  name,
  disabled,
  onChange,
  className = "",
  error,
  width,
  _size = "lg",
  icon,
  ...rest
}) => {
  return (
    <div
      style={{ width }}
      className={`input_wrapper ${className} ${fullWidth ? "w_full" : ""}`}
    >
      <span className="icon">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        aria-invalid={!!error}
        className={`${_size} ${error ? "input_error" : ""}`}
        {...rest}
      />

      {label && <label className="floating_label">{label}</label>}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};
