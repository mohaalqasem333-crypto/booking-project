import React from "react";
import LoginImage from "../LoginImage/LoginImage";
import "./AuthLayout.css";

function AuthLayout({ children }) {
  return (
    <>
      <main className="auth-main">
        <div className="auth-container">
          <LoginImage />

          <div className="auth-form">{children}</div>
        </div>
      </main>
    </>
  );
}

export default AuthLayout;
