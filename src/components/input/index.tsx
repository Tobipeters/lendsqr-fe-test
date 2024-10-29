import React from "react";

interface LInputProps extends React.InputHTMLAttributes<HTMLElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  label: string;
}

export const LInput: React.FC<LInputProps> = ({
  type = "text",
  label,
  placeholder,
  value,
  name,
  disabled,
  onChange,
  className = "",
  error,
  ...rest
}) => {
  return (
    <div className={`input_wrapper ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        aria-invalid={!!error}
        className={error ? "input_error" : ""}
        {...rest}
      />

      {label && <label className="floating_label">{label}</label>}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};
