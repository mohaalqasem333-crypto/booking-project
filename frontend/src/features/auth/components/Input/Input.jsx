import React, { useState } from "react";
import "./Input.css";
function Input({ label, type, name, placeholder, required,
  value,
  onChange,
  showPasswordToggle = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    showPasswordToggle && showPassword ? "text" : type;

  return (
    <div className="input-form">
      <label htmlFor={name}>{label}</label>

      <div className="input-box">
        <input
          id={name}
          type={inputType}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />

        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <i className="fa-solid fa-eye-slash"></i>
            ) : (
              <i className="fa-solid fa-eye"></i>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;