import React from "react";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import LoginNav from "../../../helpers/components/nav/LoginNav";
import "./Login.css";
import api from "../../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Input/Input";
import SocialLoginButtons from "../components/SocialLoginButtons/SocialLoginButtons";
import CheckBox from "../components/CheckBox/CheckBox";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});

    const userData = {
      email,
      password,
    };

    console.log("Login data:", userData);

    try {
     const response = await api.post("/auth/login", userData);

      console.log("Server response:", response.data);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/");
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong.";

      if (message === "Invalid email or password") {
        setErrors({
          general: "Invalid email or password.",
        });
      } else {
        setErrors({
          general: message,
        });
      }
    }
  };
  return (
    <>
      <LoginNav />

      <AuthLayout>
        <h2>Login</h2>
        <p>Login to your account</p>
        <form onSubmit={handleSubmit}>
          <Input
            type={"email"}
            label={"Email"}
            name={"email"}
            placeholder={"mohammadalqasem@gmail.com"}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type={"password"}
            label={"Password"}
            name={"password"}
            placeholder={"Enter your password"}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
            showPasswordToggle={true}
          />
          {errors.general && <p className="field-error">{errors.general}</p>}

          <div className="row">
            <CheckBox label="Remember me" name="remember" id="remember" />
            <div className="forget-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
          <button className="login-button" type="submit">
            Login
          </button>

          <p className="or">Or</p>

          <SocialLoginButtons />

          <p className="register">
            "Don't have an account in mohammadBook yet?{" "}
            <Link to="/register">Register</Link> !
          </p>
        </form>
      </AuthLayout>
    </>
  );
}

export default Login;
