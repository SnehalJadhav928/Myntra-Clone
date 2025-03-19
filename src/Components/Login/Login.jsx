import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <img
          className="auth-banner"
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
          alt="Offer Banner"
        />
        <div className="auth-title">
          <strong>Login</strong> or <strong>Signup</strong>
        </div>
        <div className="auth-input-box">
          <div className="auth-country-code">+91</div>
          <input className="auth-input" type="text" placeholder="Mobile Number" />
        </div>
        <p className="auth-terms">
          By continuing, I agree to the <span className="auth-highlight">Terms of Use</span> & <span className="auth-highlight">Privacy Policy</span>
        </p>
        <button className="auth-btn">CONTINUE</button>
        <p className="auth-help-text">
          Have trouble logging in? <span className="auth-help">Get help</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
