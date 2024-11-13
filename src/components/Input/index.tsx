import React, { forwardRef } from "react";

interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  autocomplete: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, name, placeholder, error, autocomplete, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <input
          autoComplete={autocomplete}
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          {...props}
        />
        {error && <span>{error}</span>}
      </div>
    );
  }
);

export const ref = React.createRef();
