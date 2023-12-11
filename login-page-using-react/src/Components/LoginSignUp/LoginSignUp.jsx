import React, { useState } from "react";
import "./LoginSignUp.css";
import user_icon from "../Assets/user_icon.png";
import email_icon from "../Assets/email_icon.png";
import password_icon from "../Assets/password_icon.png";
import wel_img from "../Assets/welcome.jpg";

const LoginSignUp = () => {
  const [action, setAction] = useState("Login");
  const [form, setForm] = useState({
    Username: "",
    Email: "",
    Password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const error = ["Username", "Email", "Password"];
  const [page, setPage] = useState("first");

  const checkError = (name) =>
    name === errorMsg && <span className="errorMsg">*Enter {name}</span>;

  function checkEmptyfields(...args) {
    for (let i = 0; i <= args.length; i++) {
      if (args[i] === "") {
        setErrorMsg(error[i]);
        (i != 0) & (action === "Login")
          ? setErrorMsg(error[i + 1])
          : setErrorMsg(error[i]);
        return false;
      }
    }
    setErrorMsg("");
    return true;
  }

  const updateField = (e) => {
    const nextFormState = { ...form, [e.target.placeholder]: e.target.value };
    setForm(nextFormState);
  };

  const changePage = () => {
    setErrorMsg("");
    action === "Login" ? setAction("Sign Up") : setAction("Login");
  };

  const submit = (e) => {
    e.preventDefault();
    if (action === "Sign Up") {
      if (checkEmptyfields(form.Username, form.Email)) {
        let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (form.Email.match(format)) {
          window.alert(`Your signed in ${form.Username}`);
          setPage("second");
        } else {
          setErrorMsg("valid email");
        }
      }
    } else {
      if (checkEmptyfields(form.Username, form.Password)) {
        window.alert(`Welcome back ${form.Username}`);
        setPage("second");
      }
    }
  };

  return (
    <>
      {page === "second" ? (
        <div className="container">
          <span className="text " style={{ fontSize: "30px" }}>
            Hello {form.Username}!
          </span>
          <img className="welcome_img" src={wel_img} alt=""></img>
        </div>
      ) : (
        <div className="container">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>

          <div className="inputs">
            {checkError("Username")}
            {checkError("Email")}
            {checkError("Password")}
            {checkError("valid email")}

            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="Username"
                value={form.Username}
                onChange={updateField}
                required
              />
            </div>

            {action === "Login" ? (
              <div style={{ display: "none" }}></div>
            ) : (
              <>
                <div className="input">
                  <img src={email_icon} alt="" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.Email}
                    onChange={updateField}
                    required
                  />
                </div>
              </>
            )}

            {action === "Sign Up" ? (
              <div style={{ display: "none" }}></div>
            ) : (
              <>
                <div className="input" style={{ marginBottom: "5px" }}>
                  <img src={password_icon} alt="" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={form.Password}
                    onChange={updateField}
                    required
                  />
                </div>
                <button className="forgot-password">Forgot Password</button>
              </>
            )}
          </div>

          <div className="submit-container">
            <button id="submit" className="submit" onClick={submit}>
              {action === "Login" ? "Login" : "create account"}
            </button>
            {action === "Login" ? (
              <div className="info">
                Don't have an account ?
                <button onClick={changePage}>Sign Up</button>
              </div>
            ) : (
              <div className="info">
                Already have an account ?{" "}
                <button onClick={changePage}>Login</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignUp;
