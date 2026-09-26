import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginBtn.css";
function LoginBtn({ text, navigatePath }) {
  const navigate = useNavigate();

  return (
    <button
      className="singin-register-button"
      type="button"
      onClick={() => navigate(navigatePath)}
    >
      {text}
    </button>
  );
}

export default LoginBtn;
