import React from "react";

interface LSelectProps extends React.InputHTMLAttributes<HTMLElement> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  error?: string;
  label?: string;
  _size?: "md" | "lg";
  fullWidth?: boolean;
  width?: string;
  icon?: React.JSX.Element | string;
  options?: { value: string; label: string }[]; 
}

export const LSelect: React.FC<LSelectProps> = ({
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
  options,
  ...rest
}) => {
  return (
    <div
      style={{ width }}
      className={`input_wrapper ${className} ${fullWidth ? "w_full" : ""}`}
    >
      <span className="icon">{icon}</span>
        <select
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          aria-invalid={!!error}
          className={`${_size} ${error ? "input_error" : ""}`}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options && options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>


      {label && <label className="floating_label">{label}</label>}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};
