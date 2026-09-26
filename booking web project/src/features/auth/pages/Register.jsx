import React from "react";
import "./Login.css";
import "./Register.css";
import axios from "axios";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginNav from "../../../helpers/components/nav/LoginNav";
import Input from "../components/Input/Input";
import SocialLoginButtons from "../components/SocialLoginButtons/SocialLoginButtons";
import CheckBox from "../components/CheckBox/CheckBox";
function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (password !== confirmPassword) {
      setErrors({
        confirmPassword: "Passwords do not match.",
      });
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log("Data being sent:", userData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        userData,
      );

      console.log("Server response:", response.data);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/");
      navigate("/");
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong.";

      if (message === "Email already exists") {
        setErrors({
          email: "An account with this email already exists.",
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
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="wraper">
            <Input
              type={"text"}
              label={"firstName"}
              name={"firstName"}
              placeholder={"Mohammad"}
              required={true}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <Input
              type={"text"}
              label={"lastName"}
              name={"lastName"}
              placeholder={"Alqasem"}
              required={true}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <Input
            type={"email"}
            label={"Email"}
            name={"email"}
            placeholder={"mohammadalqasem@gmail.com"}
            required={true}
            onChange={(e) => {
              setEmail(e.target.value);

              if (errors.email) {
                setErrors((prev) => ({
                  ...prev,
                  email: "",
                }));
              }
            }}
          />
          {errors.email && <p className="field-error">{errors.email}</p>}
          <Input
            type={"password"}
            label={"Password"}
            name={"password"}
            placeholder={"Enter your password"}
            required={true}
            onChange={(e) => {
              const value = e.target.value;

              setPassword(value);

              if (confirmPassword && value !== confirmPassword) {
                setErrors((prev) => ({
                  ...prev,
                  confirmPassword: "Passwords do not match.",
                }));
              } else {
                setErrors((prev) => ({
                  ...prev,
                  confirmPassword: "",
                }));
              }
            }}
            showPasswordToggle={true}
          />
          <Input
            type={"password"}
            label={"Confirm Password"}
            name={"confirmPassword"}
            placeholder={"Enter your password again"}
            required={true}
            onChange={(e) => {
              const value = e.target.value;

              setConfirmPassword(value);

              if (value && value !== password) {
                setErrors((prev) => ({
                  ...prev,
                  confirmPassword: "Passwords do not match.",
                }));
              } else {
                setErrors((prev) => ({
                  ...prev,
                  confirmPassword: "",
                }));
              }
            }}
            showPasswordToggle={true}
          />

          {errors.confirmPassword && (
            <p className="field-error">{errors.confirmPassword}</p>
          )}
          <CheckBox
            label="I agree to all the Terms and Privacy Policies"
            name="terms"
            id="terms"
            required={true}
          />
          {errors.general && <p className="field-error">{errors.general}</p>}
          <button className="login-button" type="submit">
            Register Now
          </button>

          <p className="or">Or</p>
          <SocialLoginButtons />

          <p className="register">
            "Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </AuthLayout>
    </>
  );
}
export default Register;
