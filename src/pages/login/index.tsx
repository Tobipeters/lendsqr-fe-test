import { Link } from "react-router-dom";
import LoginImg from "../../assets/images/pablo-sign-in.svg";
import LogoImg from "../../assets/logo/lendsqr-logo.svg";
import { LButton, LInput } from "../../components";
import React from "react";

export const Login = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <section className="_login_section">
      <div className="bg_col">
        <div className="wrapper">
          <Link to="/" className="logo_wrapper">
            <img src={LogoImg} alt="Lendsqr logo" />
          </Link>

          <img src={LoginImg} className="bg_lg" alt="Lendqsr login made easy" />
        </div>
      </div>
      <div className="form_col">
        <div className="wrapper">
          <h3 className="title">Welcome!</h3>
          <p className="details">Enter details to login</p>

          <form className="form_wrapper">
            <LInput
              required
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <LInput
              required
              type="password"
              name="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="forget_text">Forgot PASSWORD?</div>

            <LButton type="submit">Log in</LButton>
          </form>
        </div>
      </div>
    </section>
  );
};
